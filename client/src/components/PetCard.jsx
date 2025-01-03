'use client'
import { IconHome, IconZoomScan } from '@tabler/icons-react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PetCard = () => {

    const [petList, setPetList] = useState([])

    const fetchPetcard = async () => {
        const res = await axios.get('http://localhost:5000/pets/getall')
        console.log(res.data);
        setPetList(res.data);
    }

    useEffect(() => {
        fetchPetcard();
    }, []);

    return (
        <div className='md:max-w-[80%] mx-auto'>
            <div className='grid grid-cols-3 gap-4 p-4'>
                {

                    petList.map((pets) => {

                        return <div className="bg-orange-300 m-2 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full h-[80%] rounded-xl text-stone-800 overflow-hidden mx-auto font-[sans-serif]" key={pets._id}>
                            <div className="flex items-center justify-center max-h-[480px] bg-orange-300 h-3/5 w-full overflow-clip">
                                <img src={pets.image} className='p-4 w-full h-full object-cover' />
                            </div>
                            <div className="p-2 space-y-2">
                                <h2 className='px-1 text-4xl capitalize font-bold'>{pets.name}</h2>
                                <h3 className='px-1 text-lg capitalize'>Breed : {pets.breed}</h3>
                                <h3 className='px-1 text-lg capitalize'>Age   : {pets.age}</h3>
                                <h4 className='px-1 text-lg capitalize'>Since : {new Date(pets.addedAt).toDateString()}</h4>
                                <div className='flex justify-between px-1'>
                                    <button
                                        type="button"
                                        className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                    >
                                        <div className='flex items-center gap-2'><IconZoomScan />View</div>
                                    </button>

                                    <button
                                        type="button"
                                        className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600"
                                    >
                                        <div className='flex items-center gap-2'><IconHome />Bring Home</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default PetCard;


{/* <div className='grid grid-cols-3 gap-4 p-4 bg-green1'>
    {

        petList.map((pets) => {

            return <div className="bg-slate-100 m-2 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full h-full rounded-xl overflow-hidden mx-auto font-[sans-serif]" key={pets._id}>
                <div className="flex items-center justify-center min-h-[256px] bg-slate-300 h-3/5 w-full overflow-clip">
                    <img src='#' />
                </div>
                <div className="px-2">
                    <h2 className='px-1 text-4xl capitalize font-bold'>{pets.name}</h2>
                    <h3 className='px-1 text-lg capitalize'>Breed : {pets.breed}</h3>
                    <h3 className='px-1 text-lg capitalize'>Age   : {pets.age}</h3>
                    <h4 className='px-1 text-lg capitalize'>Since : {pets.addedAt}</h4>
                    <div className='flex justify-between px-1'>
                        <button
                            type="button"
                            className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                        >
                            View
                        </button>

                        <button
                            type="button"
                            className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600"
                        >
                            <div className='flex items-center gap-2'><IconHome />Bring Home</div>
                        </button>
                    </div>
                </div>
            </div>
        })
    }
</div> */}