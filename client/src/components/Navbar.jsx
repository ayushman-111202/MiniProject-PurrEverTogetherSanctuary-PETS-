import { IconBowlChopsticks } from '@tabler/icons-react'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <div>

            {/* ========== HEADER ========== */}
            <header className="flex flex-wrap bg-orange-300 md:justify-start md:flex-nowrap z-50 w-full py-5">

                {/* Navbar */}
                <nav className="relative max-w-[95%] w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center md:px-4 mx-auto">

                    {/* Logo */}
                    <div className="md:col-span-2">
                        <Link
                            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                            href="inspiration"
                            aria-label="PETS"
                        >
                            <div className='flex gap-2'>
                                <div>
                                    <img
                                        className='h-full w-[50px]'
                                        src="favicon.png" alt="paw image" />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='text-black pt-2'>PurrEverTogether</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* End Logo */}


                    {/* Pages */}
                    <div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:order-2 md:basis-auto md:col-span-6"
                        id="hs-navbar-hcail"
                        aria-labelledby="hs-navbar-hcail-collapse"
                    >

                        <div className="flex flex-col font-semibold md:px-2 md:flex-row md:justify-end md:items-center md:gap-y-0 md:gap-x-5">

                            <div>
                                <Link
                                    className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
                                    href="/"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </div>

                            <div>
                                <Link
                                    className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                    href="about-us"
                                >
                                    About us
                                </Link>
                            </div>

                            <div>
                                <Link
                                    className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                    href="browse-pets"
                                >
                                    Browse Pets
                                </Link>
                            </div>


                            <div>
                                <Link
                                    className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                    href="contact"
                                >
                                    Contact
                                </Link>
                            </div>

                            {/* <div>
                                <Link
                                    className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                    href="donate"
                                >
                                    Donate
                                </Link>
                            </div> */}

                        </div>

                    </div>
                    {/* End Pages */}


                    {/* Socials */}
                    {/* <div className='flex items-center justify-end md:order-3 gap-1 md:col-span-2'>
                        <div>
                            <a
                                // className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
                                href="#"
                                aria-current="page"
                            >
                                <IconBrandInstagram size={40} color='red'/>
                            </a>
                        </div>

                        <div>
                            <a
                                // className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                href="#"
                            >
                                <IconBrandLinkedin size={35} color='blue'/>
                            </a>
                        </div>

                        <div>
                            <a
                                // className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                href="#"
                            >
                                <IconBrandFacebook size={35} color='skyblue'/>
                            </a>
                        </div>


                        <div>
                            <a
                                // className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                href="#"
                            >
                                <IconBrandX size={35}/>
                            </a>
                        </div>
                    </div> */}
                    {/* End Socials */}


                    {/* Button Group */}
                    <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-4 md:col-span-4">

                        <Link
                            type="button"
                            href='feed-in-need'
                            className="py-2 px-3 mr-8 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl bg-green-500 text-black hover:bg-green-300 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-black"
                        >
                            Feed in need<IconBowlChopsticks/>
                        </Link>

                        <Link
                            type="button"
                            href='signup'
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl bg-orange-400 text-black hover:bg-yellow-200 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-black"
                        >
                            Sign up
                        </Link>

                        <Link
                            type="button"
                            href='signin'
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl bg-orange-400 text-black hover:bg-yellow-200 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-black"
                        >
                            Sign in
                        </Link>

                        <div className="md:hidden">
                            <button
                                type="button"
                                className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                id="hs-navbar-hcail-collapse"
                                aria-expanded="false"
                                aria-controls="hs-navbar-hcail"
                                aria-label="Toggle navigation"
                                data-hs-collapse="#hs-navbar-hcail"
                            >
                                <svg
                                    className="hs-collapse-open:hidden shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1={3} x2={21} y1={6} y2={6} />
                                    <line x1={3} x2={21} y1={12} y2={12} />
                                    <line x1={3} x2={21} y1={18} y2={18} />
                                </svg>
                                <svg
                                    className="hs-collapse-open:block hidden shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* End Button Group */}

                </nav>
                {/* End Navbar */}

            </header>
            {/* ========== END HEADER ========== */}

        </div>
    )
}

export default Navbar;
