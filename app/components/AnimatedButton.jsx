import React from 'react';
import Link from "next/link";

function AnimatedButton(props) {
    return (
        <div className="xl:px-8 xl:py-10 px-5 py-6 mt-2 sm:mt-0">
            <div className="grid gap-8 items-start justify-center">
                <div className="relative group">
                    <div
                        className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative lg:px-7 lg:py-4 px-4 py-3 bg-black rounded-lg ">
                        <span
                            className=" text-indigo-400 text-sm xl:base  group-hover:text-gray-100 transition duration-200">
                            <Link href={props.link}>{props.text}</Link> &rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AnimatedButton;