'use client'
import { IconBowlChopsticks } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    // Example state for login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Logic for logging out the user
        setIsLoggedIn(false);
        alert('You have been logged out.');
    };

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
                            <div className="flex gap-2">
                                <div>
                                    <img
                                        className="h-full w-[50px]"
                                        src="favicon.png"
                                        alt="paw image"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-black pt-2">PurrEverTogether</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* End Logo */}

                    {/* Pages */}
                    <div
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:order-2 md:basis-auto md:col-span-6"
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
                        </div>
                    </div>
                    {/* End Pages */}

                    {/* Button Group */}
                    <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-4 md:col-span-4">
                        <Link
                            type="button"
                            href="feed-in-need"
                            className="py-2 px-3 mr-8 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl bg-green-500 text-black hover:bg-green-300 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-black"
                        >
                            Feed in need
                            <IconBowlChopsticks />
                        </Link>

                        {isLoggedIn ? (
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl bg-red-500 text-black hover:bg-red-300 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-black"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    type="button"
                                    href="signup"
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl bg-orange-400 text-black hover:bg-yellow-200 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-black"
                                >
                                    Sign up
                                </Link>
                                <Link
                                    type="button"
                                    href="signin"
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-md font-semibold rounded-xl bg-orange-400 text-black hover:bg-yellow-200 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-black"
                                >
                                    Sign in
                                </Link>
                            </>
                        )}
                    </div>
                    {/* End Button Group */}
                </nav>
                {/* End Navbar */}
            </header>
            {/* ========== END HEADER ========== */}
        </div>
    );
};

export default Navbar;
