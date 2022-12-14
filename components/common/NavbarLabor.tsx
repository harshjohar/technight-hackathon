import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { en, hi } from "../../config/config";
import { useAppSelector } from "../../redux/hooks";
import { languageSelect, toggle } from "../../redux/languageSlice";

function Nav() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const signout = () => {
        signOut();
        router.push("/");
    };
    const dispatch = useDispatch();
    const selectedLanguage = useAppSelector(languageSelect);
    return (
        <div>
            {selectedLanguage == "en" ? (
                    <button
                        className="bottom-5 right-10 absolute"
                        onClick={() => dispatch(toggle())}
                    >
                        भाषा बदलो
                    </button>
                ) : (
                    <button
                        className="bottom-5 right-10 absolute"
                        onClick={() => dispatch(toggle())}
                    >
                        Change Language
                    </button>
                )}
            <nav className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href={"/"}>
                                    <div>
                                        <img
                                            className="h-10 object-contain cursor-pointer"
                                            src="/logo.png"
                                            alt="Workflow"
                                            onClick={()=>router.push('/')}
                                        />
                                        <span>ExSolution</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4 ">
                                    <span className="absolute top-5 right-5">
                                        {selectedLanguage=='en'?en.labDashboard.labLabel:hi.labDashboard.labLabel}
                                    </span>
                                    <Link
                                        href="/chats"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                        {selectedLanguage=='en'?en.labDashboard.labNavChat:hi.labDashboard.labNavChat}
                                    </Link>

                                    <Link
                                        href="/notifications"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                        {selectedLanguage=='en'?en.labDashboard.labNot:hi.labDashboard.labNot}
                                    </Link>

                                    <Link
                                        href="/forum"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                        {selectedLanguage=='en'?en.labDashboard.labForum:hi.labDashboard.labForum}
                                    </Link>

                                    <Link
                                        href="/starred"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                        {selectedLanguage=='en'?en.labDashboard.labStarred:hi.labDashboard.labStarred}
                                    </Link>
                                    <Button onClick={() => signout()}>
                                        {selectedLanguage=='en'?en.labDashboard.labSignout:hi.labDashboard.labSignout}
                                    </Button>
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
                            href="/chats"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                            <p className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                {selectedLanguage=='en'?en.labDashboard.labNavChat:hi.labDashboard.labNavChat}
                            </p>
                        </Link>

                        <Link
                            href="/notifications"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                            <p className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            {selectedLanguage=='en'?en.labDashboard.labNot:hi.labDashboard.labNot}
                            </p>
                        </Link>

                        <Link
                            href="/forum"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                            <p className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            {selectedLanguage=='en'?en.labDashboard.labForum:hi.labDashboard.labForum}
                            </p>
                        </Link>

                        <Link
                            href="/starred"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                            <p className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            {selectedLanguage=='en'?en.labDashboard.labStarred:hi.labDashboard.labStarred}
                            </p>
                        </Link>
                        <Button onClick={() => signOut()}>
                            {selectedLanguage=='en'?en.labDashboard.labSignout:hi.labDashboard.labSignout}
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Nav;
