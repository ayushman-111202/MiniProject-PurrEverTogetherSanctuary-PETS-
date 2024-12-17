'use client';
import PetCard from '@/components/PetCard';
import { IconPaw, IconPlus } from '@tabler/icons-react';
import { useFormik } from 'formik';
import React, { useState } from 'react'

const ManagePets = () => {

  const [petList, setPetList] = useState([])

  const pets = async () => {
    const res = await axios.get('http://localhost:5000/pets/getall')
  }


  
  return (
    // <div className='flex bg-stone-200 h-[80vh] w-full justify-center items-center'>
    //   <div className='text-5xl'>
    //     <IconPaw className='mx-auto' size={90} color='green' />
    //     Oops! Currently there are no animals in the shelter
    //   </div>
    // </div>
    <div className='flex flex-col'>
      <PetCard />
    </div>

  )
}

export default ManagePets;




