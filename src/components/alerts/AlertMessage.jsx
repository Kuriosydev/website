"use client";

import { useState } from "react";

export default function AlertMessage({ heading, message, type = "error" }) {
    const [isClose, setIsClose] = useState(false);

    const alert = {
        error: "bg-red-100 border border-red-400 text-red-700 ",
        success: "bg-green-100 border border-green-400 text-green-700 ",
        warning: "bg-yellow-100 border border-yellow-400 text-yellow-700 ",
        info: "bg-blue-100 border border-blue-400 text-blue-700 "
    }

    const alertCrossButton = {
        error: "text-red-700",
        success: "text-green-700",
        warning: "text-yellow-700",
        info: "text-blue-700"
    }
    const handleClose = () => {
        isClose === false ? setIsClose(true) : setIsClose(false);
    };

    if (isClose) return null;

    return (
        <div className={`${alert[type]} px-4 py-3 rounded relative flex items-start`} role="alert">
            <div className="pr-10">
                {heading && <strong className="font-bold block">{heading}</strong>}
                {message && <span className="block sm:inline break-words">{message}</span>}
            </div>
            <button
                onClick={handleClose}
                className="absolute top-0 right-0 px-4 py-3 focus:outline-none cursor-pointer"
            >
                <svg className={`fill-current h-6 w-6 ${alertCrossButton[type]}`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </button>
        </div>
    );
}
