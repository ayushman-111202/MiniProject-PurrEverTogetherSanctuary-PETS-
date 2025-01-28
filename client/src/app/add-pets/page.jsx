'use client'
import { IconCheck, IconLoader3, IconUpload } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const addPetSchema = Yup.object().shape({
    name: Yup.string().required('* Please fill this field'),
    type: Yup.string().required('* Please fill this field'),
    breed: Yup.string().required('* Please fill this field'),
    color: Yup.string().required('* Please fill this field'),
    age: Yup.string().required('* Please fill this field'),
    email: Yup.string().required('* Please fill this field'),
    password: Yup.string().required('* Please fill this field'),
})

const AddPets = () => {

    const router = useRouter();

    const [previewUrl, setPreviewUrl] = useState([])

    //formik initialized
    const addPetForm = useFormik({
        initialValues: {
            name: '',
            type: '',
            breed: '',
            color: '',
            age: '',
            email: '',
            password: '',
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {
            console.log(values);
            axios.post('http://localhost:5000/pets/add', values)
                .then((result) => {
                    toast.success("Pet added Successfully!")
                    resetForm();
                    router.push('/browse-pets');
                }).catch((err) => {
                    toast.error("Something went wrong!")
                    setSubmitting(false);
                });
        },

        validationSchema: addPetSchema
    })

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();

        formData.append('file', file);
        formData.append('upload_preset', 'PETS_pets');
        formData.append('cloud_name', 'dqhmkuc7f');

        const res = await axios.post('https://api.cloudinary.com/v1_1/dqhmkuc7f/image/upload', formData);
        if (res.status === 200) {
            addPetForm.setFieldValue('image', res.data.url);
            console.log(res.data);

            setPreviewUrl(res.data.url);
            toast.success('Image uploaded successfully');
        }
    };

    return (
        <div className='h-full p-10'>
            <form onSubmit={addPetForm.handleSubmit}>

                <div className='flex w-full h-full shadow-xl'>

                    <div className='w-full'>
                        <div className='h-auto mx-auto border border-red-500'>


                            {/* upper div */}
                            <div className=''>

                                {/* heading-1 */}
                                <h1 className='text-start ml-20 mt-12 text-2xl font-semibold text-blue-400'>Enter Animal Details</h1>

                                {/* upper-left div */}
                                <div >
                                    <div className='flex gap-7 flex-col justify-between mx-20 mt-10 border'>

                                        <div className='flex flex-col gap-1'>
                                            <label
                                                htmlFor="animal_name"
                                                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Animal Type
                                            </label>
                                            <input
                                                type="text"
                                                id="type"
                                                onChange={addPetForm.handleChange}
                                                value={addPetForm.values.type}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Rabbit"
                                                required=""
                                            />
                                            {
                                                (addPetForm.errors.type && addPetForm.touched.type) && (
                                                    <p className='text-sm text-red-500'>
                                                        {addPetForm.errors.type}
                                                    </p>
                                                )
                                            }
                                        </div>


                                        <div className='flex flex-col gap-1'>
                                            <label
                                                htmlFor="breed"
                                                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Breed Name
                                            </label>
                                            <input
                                                type="text"
                                                id="breed"
                                                onChange={addPetForm.handleChange}
                                                value={addPetForm.values.breed}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Florida White"
                                                required=""
                                            />
                                            {
                                                (addPetForm.errors.breed && addPetForm.touched.breed) && (
                                                    <p className='text-sm text-red-500'>
                                                        {addPetForm.errors.breed}
                                                    </p>
                                                )
                                            }
                                        </div>

                                        {/* name  */}
                                        <div className='flex flex-col gap-1'>
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Pet Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                onChange={addPetForm.handleChange}
                                                value={addPetForm.values.name}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Possum"
                                                required=""
                                            />
                                            {
                                                (addPetForm.errors.name && addPetForm.touched.name) && (
                                                    <p className='text-sm text-red-500'>
                                                        {addPetForm.errors.name}
                                                    </p>
                                                )
                                            }
                                        </div>

                                        {/* color */}
                                        <div className='flex flex-col gap-1'>
                                            <label
                                                htmlFor="color"
                                                className="text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Color
                                            </label>
                                            <input
                                                type="text"
                                                id="color"
                                                onChange={addPetForm.handleChange}
                                                value={addPetForm.values.color}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="White"
                                                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                required=""
                                            />
                                            {
                                                (addPetForm.errors.color && addPetForm.touched.color) && (
                                                    <p className='text-sm text-red-500'>
                                                        {addPetForm.errors.color}
                                                    </p>
                                                )
                                            }
                                        </div>

                                        {/* age  */}
                                        <div className='flex flex-col gap-1'>
                                            <label
                                                htmlFor="age"
                                                className="text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Age
                                            </label>
                                            <input
                                                type="number"
                                                id="age"
                                                onChange={addPetForm.handleChange}
                                                value={addPetForm.values.age}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="xx"
                                            />
                                            {
                                                (addPetForm.errors.age && addPetForm.touched.age) && (
                                                    <p className='text-sm text-red-500'>
                                                        {addPetForm.errors.age}
                                                    </p>
                                                )
                                            }
                                        </div>

                                    </div>

                                    <div className='flex justify-evenly items-center mx-20 border'>


                                        <label className='text-white flex w-[15%] items-center gap-3 justify-center rounded-lg p-2 bg-green-500 text-center hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300' htmlFor="image"><IconUpload />Add</label>
                                        <input type="file"
                                            name='image'
                                            id='image'
                                            onChange={uploadImage}
                                            className='hidden'
                                            required />

                                        <button
                                            type='submit'
                                            // disabled={addPetForm.isSubmitting}
                                            className='mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10'>
                                            {
                                                addPetForm.isSubmitting ? <IconLoader3
                                                    className='mx-5 animate-spin' /> : <p className='flex items-center gap-3'><IconCheck />Add Pet</p>
                                            }
                                        </button>



                                    </div>
                                </div>

                                {/* upper-right div */}

                                <div className='w-36 h-36 object-center overflow-hidden'>
                                    {
                                        previewUrl ? (
                                            <img src={previewUrl} alt="" />
                                        ) : (
                                            <h2 className='text-black'>No Image Seleted</h2>
                                        )
                                    }
                                </div>

                            </div>



                            <h2 className='text-start ml-20 mt-12 text-2xl font-semibold text-blue-400'>Verify yourself in-order to register a new Animal</h2>

                            <div className='flex gap-7 flex-col justify-between mx-20 mt-10'>
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        onChange={addPetForm.handleChange}
                                        value={addPetForm.values.email}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="john.doe@mail.com"
                                        required=""
                                    />
                                    {
                                        (addPetForm.errors.email && addPetForm.touched.email) && (
                                            <p className='text-sm text-red-500'>
                                                {addPetForm.errors.email}
                                            </p>
                                        )
                                    }
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={addPetForm.handleChange}
                                        value={addPetForm.values.password}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                    {
                                        (addPetForm.errors.password && addPetForm.touched.password) && (
                                            <p className='text-sm text-red-500'>
                                                {addPetForm.errors.password}
                                            </p>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        defaultValue=""
                                        className="ml-20 mt-20 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        required=""
                                    />
                                </div>
                                <label
                                    htmlFor="remember"
                                    className="mt-10 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    I agree with the{" "}
                                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                                        terms and conditions
                                    </a>
                                    .
                                </label>
                            </div>
                            <button
                                type="submit"
                                disabled={addPetForm.isSubmitting}
                                className="ml-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10"
                            >
                                {
                                    addPetForm.isSubmitting ? <IconLoader3
                                        className='mx-5 animate-spin' /> : <p className='flex items-center gap-3'><IconCheck />Confirm Pet</p>
                                }

                            </button>

                        </div>

                    </div>

                </div>

            </form>
            {/* <form onSubmit={addPetForm.handleSubmit}
                className='shadow-xl'>

                <h2 className='text-start ml-20 mt-12 text-2xl font-semibold text-blue-400'>Verify yourself in-order to register a new Animal</h2>

                <div className='flex gap-7 flex-col justify-between mx-20 mt-10'>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={addPetForm.handleChange}
                            value={addPetForm.values.email}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="john.doe@mail.com"
                            required=""
                        />
                        {
                            (addPetForm.errors.email && addPetForm.touched.email) && (
                                <p className='text-sm text-red-500'>
                                    {addPetForm.errors.email}
                                </p>
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={addPetForm.handleChange}
                            value={addPetForm.values.password}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                        {
                            (addPetForm.errors.password && addPetForm.touched.password) && (
                                <p className='text-sm text-red-500'>
                                    {addPetForm.errors.password}
                                </p>
                            )
                        }
                    </div>
                </div>

                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            defaultValue=""
                            className="ml-20 mt-20 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required=""
                        />
                    </div>
                    <label
                        htmlFor="remember"
                        className="mt-10 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        I agree with the{" "}
                        <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                            terms and conditions
                        </a>
                        .
                    </label>
                </div>
                <button
                    type="submit"
                    disabled={addPetForm.isSubmitting}
                    className="ml-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10"
                >
                    {
                        addPetForm.isSubmitting ? <IconLoader3
                            className='mx-5 animate-spin' /> : <p className='flex items-center gap-3'><IconCheck />Confirm Pet</p>
                    }

                </button>
            </form> */}
        </div>
    )
}

export default AddPets;