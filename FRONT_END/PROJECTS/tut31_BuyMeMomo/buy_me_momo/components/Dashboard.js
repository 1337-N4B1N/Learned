"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'

const Dashboard = () => {
    const { data: session, status, update } = useSession()
    const router = useRouter()
    const [form, setForm] = useState({
        name: '',
        email: session?.user?.email || '',
        username: session?.user?.name || '',
        profilepic: '',
        coverpic: '',
        paypalid: '',
        paypalsecret: ''
    })
   
    const [showSecret, setShowSecret] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const getData = useCallback(async () => {
        try {
            if (session?.user?.name) {
                const userData = await fetchuser(session.user.name)
                if (userData) {
                    setForm(prevForm => ({
                        ...prevForm,
                        ...userData,
                        // Ensure session data takes precedence if database is empty
                        name: userData.name || session.user.name || '',
                        email: userData.email || session.user.email || '',
                    }))
                } else {
                    // If no database data, at least set the session data
                    setForm(prevForm => ({
                        ...prevForm,
                        name: session.user.name || '',
                        email: session.user.email || '',
                    }))
                }
            }
        } catch (error) {
            // console.error('Error fetching user data:', error)
            // toast.error('Failed to load user data', toastConfig)
            // Even if there's an error, set the session data
            setForm(prevForm => ({
                ...prevForm,
                name: session?.user?.name || '',
                email: session?.user?.email || '',
            }))
        } finally {
            setIsLoading(false)
        }
    }, [session])

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login')
        } else if (status === 'authenticated') {
            getData()
        }
    }, [status, router, getData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // Add this to prevent default form submission
        try {
            setIsLoading(true)
            await updateProfile(form, session?.user?.name)
            await update() // Update session after profile update
            // console.log("profile updated successully!")
           
            
        } catch (error) {
            // console.error('Error updating profile:', error)
        } finally {
            setIsLoading(false)
            toast('Profile Updated Succesfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
    }


    // if (status === 'loading' || isLoading) {
    //     return (
    //         <div className="flex justify-center items-center min-h-screen">
    //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
    //         </div>
    //     )
    // }



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
            {/*Same as */}
            <ToastContainer/>
            <div className='container mx-auto py-5 px-6'>

                <h1 className='text-center my-5 text-3xl font-bold'>
                    Welcome to your dashboard
                </h1>
                <form className='max-w-2xl mx-auto' onSubmit={handleSubmit}>
                    <div className="my-2">
                        <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Name
                        </label>
                        <input
                            value={form.name}
                            type="text"
                            onChange={handleChange}
                            name="name"
                            id="name"
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />
                    </div>

                    <div className="my-2">
                        <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Email
                        </label>
                        <input
                            value={form.email}
                            type="email"
                            onChange={handleChange}
                            name="email"
                            id="email"
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            disabled
                        />
                    </div>

                    <div className="my-2">
                        <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Username
                        </label>
                        <input
                            value={form.username}
                            type="text"
                            onChange={handleChange}
                            name="username"
                            id="username"
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />
                    </div>

                    <div className="my-2">
                        <label htmlFor="profilepic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Profile Picture URL
                        </label>
                        <input
                            value={form.profilepic}
                            type="text"
                            onChange={handleChange}
                            name="profilepic"
                            id="profilepic"
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />
                    </div>

                    <div className="my-2">
                        <label htmlFor="coverpic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Cover Picture URL
                        </label>
                        <input
                            value={form.coverpic}
                            type="text"
                            onChange={handleChange}
                            name="coverpic"
                            id="coverpic"
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />
                    </div>

                    <div className="my-2">
                        <label htmlFor="paypalid" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            PayPal ID
                        </label>
                        <input
                            value={form.paypalid}
                            type="text"
                            onChange={handleChange}
                            name="paypalid"
                            id="paypalid"
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />
                    </div>

                    <div className="my-2">
                        <label htmlFor="paypalsecret" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            PayPal Secret
                        </label>
                        <div className="relative">
                            <input
                                value={form.paypalsecret}
                                type={showSecret ? "text" : "password"}
                                onChange={handleChange}
                                name="paypalsecret"
                                id="paypalsecret"
                                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            />
                            <img
                                src={showSecret ? "/eyecross.png" : "/eye.png"}
                                alt="toggle secret visibility"
                                onClick={() => setShowSecret(prev => !prev)}
                                className='absolute right-3 top-2 cursor-pointer w-4 h-4'
                            />
                        </div>
                    </div>

                    <div className="my-6">
                        <button
                            type='submit'

                            disabled={isLoading}
                            className='block w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {isLoading ? 'Saving...' : 'Save'}
                        </button>


                    </div>
                </form>
            </div>
        </>
    )
}

export default Dashboard


