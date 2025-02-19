import PetCard from '@/components/PetCard';
import React from 'react'

const BrowsePets = () => {

  return (
    <div className='bg-orange-100 dark:bg-gray-900'>
      <PetCard pageType="browse" />
    </div>
  )
}

export default BrowsePets
