'use client'
import { useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'

const Signin = () => {

  const userLoginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    }

  })

  return (
    <div>
      <div className="flex h-screen w-full bg-orange-100">
        <div className="w-1/2 h-3/5 m-auto bg-orange-300 rounded-xl p-5 shadow-xl gap-20 shadow-slate-500">
          <header className='gap-10'>
            <p className='text-center text-slate-700 text-4xl font-bold'>PurrEverTogetherSanctuary</p>
            <img
              className="w-20 mx-auto mb-5"
              src="favicon.png"
            />
          </header>
          <form onSubmit={userLoginForm.handleSubmit}>
            <div>
              <label className="block mb-2 text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 mb-6 text-black focus:text-slate-100 border-b-2 border-green-600 outline-none focus:bg-slate-400"
                type="text"
                id="email"
                onChange={userLoginForm.handleChange}
                value={userLoginForm.values.email}
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 mb-6 text-black focus:text-slate-100 border-b-2 border-green-600 outline-none focus:bg-slate-400"
                type="password"
                id="password"
                onChange={userLoginForm.handleChange}
                value={userLoginForm.values.password}
              />
            </div>
            <div>
              <input
                onSubmit={userLoginForm.handleSubmit}
                className="mt-20 w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 mb-6 rounded"
                type="submit"
              />
            </div>
          </form>
          <footer>
            <a
              className="text-indigo-700 hover:text-blue-500 text-sm float-left"
              href="#"
            >
              Forgot Password?
            </a>
            <a
              className="text-indigo-700 hover:text-blue-500 text-sm float-right"
              href="#"
            >
              Create Account
            </a>
          </footer>
        </div>
      </div>

    </div>
  )
}

export default Signin;
