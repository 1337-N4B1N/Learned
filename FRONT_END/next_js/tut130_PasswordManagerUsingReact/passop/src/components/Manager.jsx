import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    const copyText = (text) => {

        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
        });

        navigator.clipboard.writeText(text)
    }
    useEffect(() => {

        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])
    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyenot.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"


        }
        else {
            passwordRef.current.type = "text"
            ref.current.src = "icons/eyenot.png"


        }

    }
    const savePassword = () => {
        if(form.site.length>3 && form.password.length>3 && form.username.length>3){
        toast('Password Saved!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
        });
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])

        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log([...passwordArray, form])
        setForm({ site: "", username: "", password: "" })
    }
    else{
        toast('Error:Password couldn\'t be saved !', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
        });
    }


    }
    const deletePassword = (id) => {
        toast('Password Deleted Successfully!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
        });
        console.log("Deleting password with id ", id)
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }


    }
    const editPassword = (id) => {


        console.log("Editing password with id ", id)
        setForm(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>


            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className=" p-2 pt-3  md:mycontainer min-h-[82vh] ">
                <h1 className='text-white text-4xl font-bold text-center'>
                    <span className='text-green-800'>&lt;</span>
                    Pass
                    <span className='text-green-800'>OP/&gt;</span>
                </h1>
                <p className='text-green-800 text-lg text-center '> Your own password manager</p>
                <div className=" text-black flex flex-col p-4 gap-5 items-center ">
                    <input className='rounded-lg border border-green-500 w-full  px-4 py-1' type="text" name="site" id="site" placeholder='Enter website url' value={form.site} onChange={handleChange} />
                    <div className=" flex flex-col md:flex-row w-full justify-between gap-4">
                        <input className='rounded-lg border border-green-500  w-full px-4 py-1' type="text" name="username" id="username" placeholder='Enter username/email' value={form.username} onChange={handleChange} />
                        <div className="relative">
                            <input ref={passwordRef} className='rounded-lg border border-green-500 w-full  px-4 py-1' type="password" name="password" id="password" placeholder='enter password' value={form.password} onChange={handleChange} />
                            <span className='absolute right-[5px] top-[2.5px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} width={30} src="icons/eye.png" alt="i" className='p-0.5' />
                            </span>
                        </div>
                    </div>


                    <button onClick={savePassword} className='flex justify-center
                        items-center font-bold text-black bg-green-600 pl-4 pr-7
                    py-2 rounded-full gap-1 w-fit hover:bg-green-500 '><lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon >
                        Save password</button>


                </div>
                <div className="passwords  ">
                    <h2 className='font-bold text-2xl py-4 '>Your passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden text-red-50  mb-9">
                            <thead className=' bg-teal-900 '>
                                <tr>
                                    <th className='py-2 border  '>Site</th>
                                    <th className='py-2 border '>Username</th>
                                    <th className='py-2 border '>Password</th>
                                    <th className='py-2 border '>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-teal-700 border  '>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index} className=''>
                                        <td className='border  py-2 text-center'>
                                            <div className='flex items-center justify-center '>
                                                <a href={item.site} target='_blank'>
                                                    <span> {item.site}</span>
                                                </a>
                                                <div className='size-9  cursor-pointer ' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "39px", "paddingLeft": "7px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover"
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>

                                        </td>
                                        <td className='border   py-2 text-center '>
                                            <div className='flex items-center justify-center '>
                                                <span>{item.username}</span>
                                                <div className='size-9  cursor-pointer ' onClick={() => { copyText(item.username) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "39px", "paddingLeft": "7px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover"
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border   py-2  text-center'>
                                            <div className='flex items-center justify-center '>
                                                <span>{item.password}</span>
                                                <div className='size-9  cursor-pointer ' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "39px", "paddingLeft": "7px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover"
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>

                                        </td>
                                        <td className=' action border flex  py-2  text-center  items-center justify-center'>
                                            <span className='edit cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "39px", "paddingLeft": "7px" }}
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                >
                                                </lord-icon>
                                            </span>
                                            <span className='delte cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "39px", "paddingLeft": "7px" }}
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                >
                                                </lord-icon>
                                            </span>

                                        </td>
                                    </tr>

                                })}
                            </tbody>
                        </table>}

                </div>

            </div>
        </>
    )
}

export default Manager
