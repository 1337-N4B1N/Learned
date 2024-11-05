
"use client";
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { Bounce } from 'react-toastify';

const PaymentPage = ({ username }) => {
  const { data: session } = useSession();
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paymentform, setpaymentform] = useState({
    name: '',
    message: '',
    amount: ''
  });

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast('🦄 Payment done successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, [searchParams, router, username]);

  const pay = async (amount) => {
    // Get the orderId
    // let a = await initiate(amount, username, paymentform)
    // let orderId = a.id
    // var options = {
    //   "key": currentUser.paypalid,
    //   "amount": amount,
    //   "name": "BuyMeMomo",
    //   "description": "Test Transaction",
    //   "image": "https://example.com/your_logo",
    //   "orderid": orderId,
    //   "callback_url": `${process.env.URL}/api/payload`
    // }
  };

  const getData = async () => {
    try {
      const user = await fetchuser(username);
      if (!user) {
        return; // Exit the function early
      }
      setcurrentUser(user);
      const dbPayments = await fetchpayments(username);
      setPayments(dbPayments);
    } catch (error) {
      // console.error("Error fetching user or payments:", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className='cover w-full bg-red-100 relative'>
        <img className='object-cover w-full h-[350px] md:h-[400px]' src={currentUser.coverpic} alt="" />
        <div className='profile-pic absolute -bottom-16 left-[50%] transform -translate-x-1/2' style={{ width: 150, height: 150 }}>
          <img className='rounded-full object-cover w-full h-full border-2' src={currentUser.profilepic} alt="" />
        </div>
      </div>

      <div className="info flex justify-center items-center my-16 flex-col gap-1">
        <div className='font-bold text-lg'>
          @{currentUser.name}
        </div>
        <div className='text-slate-400'>
          Help {currentUser.name} to buy momo!
        </div>
        <div className='text-slate-400'>
          {payments.length} Payment. ${payments.reduce((a, b) => a + b.amount, 0)} raised
        </div>
        <div className="payment flex flex-col md:flex-row gap-3 w-full mt-11">
          <div className="supporters w-full md:w-1/2 bg-slate-700 rounded-lg text-white p-10 ">
            <h2 className='text-2xl font-bold mb-9 '>Top 7 Supporters</h2>
            <ul className='mx-4 text-lg'>
              {payments.length === 0 && <li>No Payments Yet!</li>}
              {payments.map((p, i) => (
                <li key={i} className="my-4 flex gap-3 items-center">
                  <img width={44} src="profile.png" alt="user avatar" />
                  <span>{p.name} donated <span className="font-bold">Rs{p.amount} </span> with a message "{p.message}"</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="makePayment w-full md:w-1/2 bg-slate-700 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold mb-9 '>Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <input type="text" onChange={handleChange} value={paymentform.name} name="name" className='w-full p-3 rounded-lg bg-slate-900' placeholder='Name' />
              <input type="text" onChange={handleChange} value={paymentform.message} className='w-full p-3 rounded-lg bg-slate-900' placeholder='Message' name='message' />
              <input type="text" onChange={handleChange} value={paymentform.amount} className='w-full p-3 rounded-lg bg-slate-900' placeholder='Enter Amount' name='amount' />

              <button onClick={() => pay(paymentform.amount)} className='text-white bg-gradient-to-br from-teal-600 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full disabled:bg-teal-600 disabled:opacity-60 disabled:from-purple-500 disabled:pointer-events-none' disabled={paymentform.name.length < 3 || paymentform.message.length < 4 || !paymentform.amount}>Pay</button>
            </div>
            <div className="flex gap-2 mt-5">
              <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(5)}>Pay $5</button>
              <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(10)}>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(20)}>Pay $20</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
