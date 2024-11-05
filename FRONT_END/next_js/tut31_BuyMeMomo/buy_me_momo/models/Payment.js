import mongoose from "mongoose";
const {Schema,model}=mongoose;

const PaymentSchema=new Schema({
    name:{type:String,required:true},
    to_user:{type:String,required:true},
    // oid=orderid
    oid:{type:String,required:true},
    message:{type:String},
    amount:{type:Number,required:true},
    createdAt: {type: Date,default:Date.now},
    updatedAt: {type: Date,default:Date.now},
    // timestamp-true ki k garo bhnye update created aauxa rey..tyo padhnu majaley paxi
    done:{type:Boolean,default:false}
})
const Payment=mongoose.models.Payment ||model("Payment",PaymentSchema)
export default  Payment;