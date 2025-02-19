'use client';
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

// Validation Schema using Yup
const addUserSchema = Yup.object().shape({
  firstName: Yup.string().required('* This field is needed to be filled'),
  lastName: Yup.string().required('* This field is needed to be filled'),
  contact: Yup.string()
    .required('* This field is needed to be filled')
    .matches(/^\d{10}$/, 'Contact must be a 10-digit number'),
  email: Yup.string()
    .required('* This field is needed to be filled')
    .email('Please enter a valid email'),
  password: Yup.string()
    .required('* This field is needed to be filled')
    .min(6, 'Password must be at least 6 characters long'),
  confirmPassword: Yup.string()
    .required('* Please re-enter the password!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

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
    validationSchema: addUserSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        // API Call
        const response = await axios.post('http://localhost:5000/users/add', values);

        // Handle successful signup
        toast.success('User registered successfully!');
        resetForm();

        // Log the user in and set the authentication state
        logIn(response.data.user); // Assuming the API returns user data
        router.push('/browse-pets'); // Redirect to the desired page
      } catch (error) {
        console.error(error);
        toast.error('Oops! Something went wrong.');
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="h-full bg-orange-100 dark:bg-gray-900">
      {/* Container */}
      <div className="mx-auto rounded-3xl">
        <div className="flex justify-center px-6 py-12 rounded-l-3xl">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex rounded-l-3xl">
            {/* Image Section */}
            <div className="w-full h-4/5 bg-orange-100 dark:bg-gray-900 hidden lg:block lg:w-5/12 bg-cover rounded-l-3xl">
              <img src="paw.jpg" alt="Paw" className="rounded-3xl h-full w-auto" />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-7/12 h-4/5 bg-white dark:bg-gray-700 p-3 rounded-3xl">
              <h3 className="py-2 text-2xl text-center text-gray-800 dark:text-white">
                Create an Account!
              </h3>
              <form onSubmit={addUserForm.handleSubmit} className="px-4 pt-6 pb-4 bg-white dark:bg-gray-800 rounded">
                <div className="mb-4 flex flex-col gap-4">
                  {/* Input Fields */}
                  {['firstName', 'lastName', 'contact', 'email', 'password', 'confirmPassword'].map((field, idx) => (
                    <div key={idx}>
                      <label
                        className="block text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor={field}
                      >
                        {field === 'confirmPassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id={field}
                        type={field.includes('password') ? 'password' : field === 'contact' ? 'number' : 'text'}
                        placeholder={field === 'confirmPassword' ? 'Re-enter Password' : `Enter ${field}`}
                        onChange={addUserForm.handleChange}
                        onBlur={addUserForm.handleBlur}
                        value={addUserForm.values[field]}
                      />
                      {addUserForm.errors[field] && addUserForm.touched[field] && (
                        <p className="text-sm text-red-500">{addUserForm.errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <div className="mb-6 text-center mt-28">
                  <button
                    type="submit"
                    disabled={addUserForm.isSubmitting}
                    className="flex justify-center items-center mx-auto w-1/3 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                  >
                    {addUserForm.isSubmitting ? (
                      <IconLoader3 className="mx-5 animate-spin" />
                    ) : (
                      <p className="flex items-center gap-3">
                        <IconCheck />
                        Register Account
                      </p>
                    )}
                  </button>
                </div>
                <hr className="mb-6 border-t" />

                {/* Links */}
                <div className="text-center">
                  <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" href="signin">
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
