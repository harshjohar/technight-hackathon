import Link from "next/link";
import React, { useState } from "react";

function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-8 w-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        href="/"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        href="/chats"
                                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Chats
                                    </Link>

                                    <Link
                                        href="/jobs"
                                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Jobs
                                    </Link>

                                    <Link
                                        href="/addjob"
                                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Add Jobs
                                    </Link>

                                    <Link
                                        href="/profile"
                                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open main menu</span>

                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>

                                <svg
                                    className="hidden h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`md:hidden ${open ? "block" : "hidden"}`}
                    id="mobile-menu"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <p className="hover:bg-gray-700 hover:text-white text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                                Dashboard
                            </p>
                        </Link>

                        <Link
                            href="/chats"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <p className="hover:bg-gray-700 hover:text-white text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                                Chats
                            </p>
                        </Link>

                        <Link
                            href="/jobs"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <p className="hover:bg-gray-700 hover:text-white text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                                Jobs
                            </p>
                        </Link>

                        <Link
                            href="/addjob"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <p className="hover:bg-gray-700 hover:text-white text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                                Add Jobs
                            </p>
                        </Link>

                        <Link
                            href="/profile"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <p className="hover:bg-gray-700 hover:text-white text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                                Profile
                            </p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Nav;
