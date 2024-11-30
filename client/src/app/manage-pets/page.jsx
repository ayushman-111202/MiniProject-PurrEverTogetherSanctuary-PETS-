import { IconPaw } from '@tabler/icons-react';
import React from 'react'

const ManagePets = () => {
  return (
    <div className='flex bg-stone-200 h-[80vh] w-full justify-center items-center'>
      <div className='text-5xl'>
        <IconPaw className='mx-auto' size={90} color='green'/>
        Oops! Currently there are no animals in the shelter
      </div>
    </div>
  )
}

export default ManagePets;
