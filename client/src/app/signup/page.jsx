'use client'
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const addUserSchema = Yup.object().shape({
  firstName: Yup.string().required('* This field is needed to be filled'),
  lastName: Yup.string().required('* This field is needed to be filled'),
  contact: Yup.string().required('* This field is needed to be filled'),
  email: Yup.string().required('* This field is needed to be filled'),
  password: Yup.string().required('* This field is needed to be filled'),
  confirmPassword: Yup.string().required('Please re-enter the password!')
    .oneOf([Yup.ref('password'), null], "Password must match"),
})

const Signup = () => {

  const router = useRouter();

  const addUserForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      contact: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      axios.post('http://localhost:5000/users/add', values)
        .then((result) => {
          toast.success('User registered successfully!');
          resetForm();
          router.push('/browse-pets');
        }).catch((err) => {
          toast.error('Oops! Something went wrong.');
          setSubmitting(false);
        });
    },

    validationSchema: addUserSchema

  })


  return (
    <div>

      {/* I have added support for dark mode and improved UI */}
      <div className="h-full bg-orange-100 dark:bg-gray-900">
        {/* Container */}
        <div className="mx-auto rounded-3xl">
          <div className="flex justify-center px-6 py-12 rounded-l-3xl">
            {/* Row */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex rounded-l-3xl">
              {/* Col */}
              <div
                className="w-full h-4/5 bg-orange-100 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-3xl"
              // style={{
              //   backgroundImage:
              //     'url("paw.jpg")'
              // }}
              >
                <img src="paw.jpg" alt="" className='rounded-3xl h-full w-auto' />
              </div>

              {/* Col */}
              <div className="w-full flex flex-col object-contain overflow-clip lg:w-7/12 h-4/5 bg-white dark:bg-gray-700 p-3 rounded-3xl">
                <h3 className="py-2 text-2xl text-center text-gray-800 dark:text-white">
                  Create an Account!
                </h3>
                <form onSubmit={addUserForm.handleSubmit} className="px-4 pt-6 pb-4 mb-4 bg-white dark:bg-gray-800 rounded">
                  <div className="mb-4 md:flex gap-4 flex-col md:justify-between">
                    <div className=" ">
                      <label
                        className="block text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.firstName}
                        placeholder="First Name"
                      />
                      {
                        (addUserForm.errors.firstName && addUserForm.touched.firstName) && (
                          <p className='text-sm text-red-500'>
                            {addUserForm.errors.firstName}
                          </p>
                        )
                      }
                    </div>
                    <div className="">
                      <label
                        className="block text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.lastName}
                        placeholder="Last Name"
                      />
                      {
                        (addUserForm.errors.lastName && addUserForm.touched.lastName) && (
                          <p className='text-sm text-red-500'>
                            {addUserForm.errors.lastName}
                          </p>
                        )
                      }
                    </div>
                    <div className="">
                      <label
                        className="block text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="contact"
                      >
                        Contact
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="contact"
                        type="number"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.contact}
                        placeholder="10 digits contact number"
                      />
                      {
                        (addUserForm.errors.contact && addUserForm.touched.contact) && (
                          <p className='text-sm text-red-500'>
                            {addUserForm.errors.contact}
                          </p>
                        )
                      }
                    </div>
                    <div className="">
                      <label
                        className="block text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.email}
                        placeholder="Email"
                      />
                      {
                        (addUserForm.errors.email && addUserForm.touched.email) && (
                          <p className='text-sm text-red-500'>
                            {addUserForm.errors.email}
                          </p>
                        )
                      }
                    </div>
                    <div className="mb-4 md:flex md:justify-between">
                      <div className="">
                        <label
                          className="block text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          onChange={addUserForm.handleChange}
                          value={addUserForm.values.password}
                          placeholder="*****"
                        />
                        {/* <p className="text-xs italic text-red-500">
                          Please choose a password.
                        </p> */}
                        {
                          (addUserForm.errors.password && addUserForm.touched.password) && (
                            <p className='text-sm text-red-500'>
                              {addUserForm.errors.password}
                            </p>
                          )
                        }
                      </div>
                      <div className="">
                        <label
                          className="block text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="confirmPassword"
                        >
                          Confirm Password
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="confirmPassword"
                          type="password"
                          onChange={addUserForm.handleChange}
                          value={addUserForm.values.confirmPassword}
                          placeholder="*****"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      type="submit"
                      disabled={addUserForm.isSubmitting}
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline flex items-center justify-center"
                    >
                      {
                        addUserForm.isSubmitting ? <IconLoader3
                          className='mx-5 animate-spin' /> : <p className='flex items-center gap-3'><IconCheck />Register Account</p>
                      }
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="signin"
                    >
                      Already have an account? Login!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup
