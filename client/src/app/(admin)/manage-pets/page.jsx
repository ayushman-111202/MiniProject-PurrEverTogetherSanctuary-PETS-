import PetCard from '@/components/PetCard';
import React from 'react'

const ManagePets = () => {

  return (

    <div className='flex flex-col bg-orange-100 dark:bg-gray-900'>
      <PetCard pageType="manage" />
    </div>

  )
}

export default ManagePets;




