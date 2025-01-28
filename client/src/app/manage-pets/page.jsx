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

    <div className='flex flex-col bg-orange-100'>
      <PetCard pageType="manage" />
    </div>

  )
}

export default ManagePets;




