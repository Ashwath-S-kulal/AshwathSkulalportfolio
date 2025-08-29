import React from "react";

export default function LoginToProject() {
    return (
        <div className="min-h-screen flex items-center justify-center pt-0 p-4">
            <div className="w-full max-w-fit bg-gray-800 shadow-2xl rounded-2xl  p-8 hover:scale-105 transform transition duration-500">
                <h2 className="text-4xl text-sky-500 font-bold text-center leading-tight">
                    Login to Access My Projects
                </h2>

                <p className="text-center text-lg text-gray-500 mt-6">
                    have an account? {" "}
                    <a href="/sign-in" className="text-indigo-600 hover:underline">
                        Sign in
                    </a>
                </p>
                 
            </div>
        </div>
    );
}
