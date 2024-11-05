import React from 'react'
import { NextResponse } from 'next/server'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDb'
import { validate } from 'json-schema'
import User from '@/models/User'
// yo razorpayharu ko chai ysto hudo raixa...paypal anusar modify hannu hai
export const POST=async(res)=>{
  await connectDB()
  let body=await req.formData()
  body=Object.fromEntries(body)
  // Check if paypalPaymentId is present on the server
  let p= await Payment.findOne({oid:body.paypal_order_id})
  if(!p)
  {
    return NextResponse.json({success:false,message:"Order Id not found"})
  }
  // fetch the secret of the user who is getting the payment
  let user=await User.findOne({username: p.to_user})
  const secret=user.paypalsecret
  // verify the payment
  let xx=validatePaymentVerification({"order_id":body.paypal_order_id,"payment_id":body.paypal_payment_id},body.paypal_signature,secret)
  if(xx)
  {
  // Update the Payment Status
  const updatedPayment=await Payment.findOneAndUpdate({oid:body.paypal_order_id},{done:"true"},{new:true})
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?payment=true`)
  }
  else{
    return NextResponse.json({success:false,message:"Payment Verification Field"
    })
  }
}