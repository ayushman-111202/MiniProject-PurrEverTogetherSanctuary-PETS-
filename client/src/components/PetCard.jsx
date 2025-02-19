// 'use client'
// import { IconTrash, IconZoomScan, IconHome } from '@tabler/icons-react'; 
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const PetCard = ({ pageType }) => {
//     const [petList, setPetList] = useState([])

//     const fetchPetcard = async () => {
//         const res = await axios.get('http://localhost:5000/pets/getall')
//         console.log(res.data);
//         setPetList(res.data);
//     }

//     useEffect(() => {
//         fetchPetcard();
//     }, []);

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {
//                     petList.map((pets) => {
//                         return (
//                             <div
//                                 className="bg-orange-300 rounded-xl shadow-lg overflow-hidden h-full flex flex-col text-stone-800 dark:bg-gray-800 dark:text-white"
//                                 key={pets._id}
//                             >
//                                 <div className="aspect-square w-full bg-orange-200 dark:bg-gray-700 overflow-hidden relative">
//                                     <img 
//                                         src={pets.image} 
//                                         alt={pets.name}
//                                         className="absolute inset-0 w-full h-full object-contain p-4" 
//                                     />
//                                 </div>
//                                 <div className="p-6 flex-grow flex flex-col">
//                                     <h2 className="text-3xl font-bold mb-3 capitalize text-stone-900 dark:text-stone-100">{pets.name}</h2>
//                                     <div className="space-y-2 mb-4 flex-grow text-stone-700 dark:text-stone-300">
//                                         <h3 className="text-lg">Breed: {pets.breed}</h3>
//                                         <h3 className="text-lg">Age: {pets.age}</h3>
//                                         <h4 className="text-lg">Added on: {new Date(pets.addedAt).toDateString()}</h4>
//                                     </div>
//                                     <div className="flex justify-between items-center mt-auto pt-4">
//                                         {pageType === 'manage' ? (
//                                             <>
//                                                 <button
//                                                     type="button"
//                                                     className="px-5 py-2.5 rounded-lg text-white font-medium tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600 transition-colors"
//                                                 >
//                                                     <div className="flex items-center gap-2">
//                                                         Edit
//                                                     </div>
//                                                 </button>

//                                                 <button
//                                                     type="button"
//                                                     className="px-5 py-2.5 rounded-lg text-white font-medium tracking-wide bg-red-600 hover:bg-red-700 active:bg-red-600 transition-colors"
//                                                 >
//                                                     <div className="flex items-center gap-2">
//                                                         <IconTrash />
//                                                     </div>
//                                                 </button>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <button
//                                                     type="button"
//                                                     className="px-5 py-2.5 rounded-lg text-white font-medium tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600 transition-colors"
//                                                 >
//                                                     <div className="flex items-center gap-2">
//                                                         <IconZoomScan /> View
//                                                     </div>
//                                                 </button>

//                                                 <button
//                                                     type="button"
//                                                     className="px-5 py-2.5 rounded-lg text-white font-medium tracking-wide bg-green-600 hover:bg-green-700 active:bg-green-600 transition-colors"
//                                                 >
//                                                     <div className="flex items-center gap-2">
//                                                         <IconHome /> Bring Home
//                                                     </div>
//                                                 </button>
//                                             </>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default PetCard;

'use client'
import { IconTrash, IconZoomScan, IconHome } from '@tabler/icons-react'; 
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PetCard = ({ pageType }) => {
    const [petList, setPetList] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode toggle

    const fetchPetcard = async () => {
        const res = await axios.get('http://localhost:5000/pets/getall');
        console.log(res.data);
        setPetList(res.data);
    };

    useEffect(() => {
        fetchPetcard();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    petList.map((pets) => {
                        return (
                            <div
                                className="bg-orange-300 rounded-xl shadow-lg overflow-hidden h-full flex flex-col text-stone-800 transition-colors duration-300 ease-in-out dark:bg-gray-800 dark:text-white"
                                key={pets._id}
                            >
                                <div className="aspect-square w-full bg-orange-200 dark:bg-gray-700 overflow-hidden relative transition-colors duration-300 ease-in-out">
                                    <img 
                                        src={pets.image} 
                                        alt={pets.name}
                                        className="absolute inset-0 w-full h-full object-contain p-4"
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h2 className="text-3xl font-bold mb-3 capitalize text-stone-900 dark:text-stone-100 transition-colors duration-300 ease-in-out">{pets.name}</h2>
                                    <div className="space-y-2 mb-4 flex-grow text-stone-700 dark:text-stone-300 transition-colors duration-300 ease-in-out">
                                        <h3 className="text-lg">Breed: {pets.breed}</h3>
                                        <h3 className="text-lg">Age: {pets.age}</h3>
                                        <h4 className="text-lg">Added on: {new Date(pets.addedAt).toDateString()}</h4>
                                    </div>
                                    <div className="flex justify-between items-center mt-auto pt-4">
                                        {pageType === 'manage' ? (
                                            <>
                                                <button
                                                    type="button"
                                                    className="px-5 py-2.5 rounded-lg text-white font-medium tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600 transition-colors"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        Edit
                                                    </div>
                                                </button>

                                                <button
                                                    type="button"
                                                    className="px-5 py-2.5 rounded-lg text-white font-medium tracking-wide bg-red-600 hover:bg-red-700 active:bg-red-600 transition-colors"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <IconTrash />
                                                    </div>
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    type="button"
                                                    className="px-5 py-2.5 rounded-lg text-white font-medium tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600 transition-colors"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <IconZoomScan /> View
                                                    </div>
                                                </button>

                                                <button
                                                    type="button"
                                                    className="px-5 py-2.5 rounded-lg text-white font-medium tracking-wide bg-green-600 hover:bg-green-700 active:bg-green-600 transition-colors"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <IconHome /> Bring Home
                                                    </div>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PetCard;
