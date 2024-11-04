import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    setError,  //throw custom errors
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const [count, setCount] = useState(0)
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }
  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", { method: "POST",  headers: {
      "Content-Type": "application/json",}, body: JSON.stringify(data) })
    let res = await r.text()
    console.log(data, res)
    //   if(data.username!== "shubham"){
    //     setError("myform",{message:"Your form is not in good order because credentials are invalid"})
    //     // simulating server side error
    //   }
    //  if(data.username==="rohan"){

    //     setError("blocked",{message:"Sorry this user is blocked"})

    //   }
  }

  return (
    <>
      {isSubmitting && <div>Loading....</div>}

      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", { required: { value: true, message: 'This field is required' }, minLength: { value: 3, message: "Min Length is 3" }, maxLength: { value: 8, message: "Max Length is 8" } })} type="text" placeholder='username' />

          {errors.username && <div className='red'>{errors.username.message}</div>}
          {/*tyo ...register("username")  garesi paxi name="username" garirakhnu pardaina hai.. */}
          <br />
          <input {...register("password", { required: true, minLength: { value: 8, message: "MinLength is 8" } })} type="password" placeholder="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {/* backend/server baata validate bhyera aayesi username of password milena bhnye tesma aauni error ko display garni simulation tala garekaa xam. */}

          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}



        </form>
      </div>


    </>
  )
}

export default App
