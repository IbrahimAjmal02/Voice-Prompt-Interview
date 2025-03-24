"use client"

import Webcam from "react-webcam"

export default function Header() {
    return (
        <>
            {/* Header */}
            <div className="animate-in fade-in zoom-in duration-[3000ms] flex justify-center items-center w-full h-[100px] border-b border-gray-700 bg-white shadow-md">
                <div className="flex items-center space-x-3">
                    <p className="font-cinzel text-2xl">Rita Skeeter</p>

                    <img src="/Logo.png" width={35} height={25} alt="Logo" />
                </div>
            </div>


            {/* Webcam Section */}
            <div className="animate-in slide-in-from-top duration-5000 flex justify-center w-full h-[575px]">
                <Webcam className="w-[700px] h-[500px] border-[3px] border-gray-700 my-10 bg-black rounded-2xl shadow-lg" />
            </div>

            {/* Start & End Buttons */}
            <div className="hover:scale-105 transition-transform flex justify-evenly w-[500px] h-[50px] border border-gray-700 bg-white rounded-xl shadow-lg absolute left-1/2 transform -translate-x-1/2 mt-[-60px] z-10 pt-2">
                <div className='w-[75px] h-[30px] bg-green-600 hover:bg-green-700 rounded-full cursor-pointer transition-all duration-150 flex items-center justify-center shadow-md border border-green-800 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]'>
                    <span className='text-white font-bold text-md'>Start</span>
                </div>
                <div className='w-[75px] h-[30px] bg-red-600 hover:bg-red-700 rounded-full cursor-pointer transition-all duration-150 flex items-center justify-center shadow-md border border-red-800 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]'>
                    <span className='text-white font-bold text-md'>End</span>
                </div>
            </div>

            {/* Review Section */}
            <div className="animate-in fade-in zoom-in duration-5000 flex flex-col items-center w-[67%] mx-auto h-[500px] border-[2px] border-gray-700 mt-28 bg-yellow-50 rounded-lg shadow-xl p-5 space-y-5 pb-10">
                <h2 className="text-2xl font-[var(--font-fell)] italic">Rita's Review</h2>
                <div className="flex w-full h-full justify-evenly space-x-10">
                    {/* Transcript */}
                    <div className="text-gray-800 border border-gray-700 w-[45%] p-4 bg-white rounded-lg shadow-inner overflow-y-auto">
                        <h3 className="text-lg font-semibold mb-2 border-b border-gray-300 pb-1">Transcript</h3>
                        <p className="text-sm leading-relaxed">hello</p>
                    </div>
                    {/* Feedback */}
                    <div className="text-gray-800 border border-gray-700 w-[45%] p-4 bg-white rounded-lg shadow-inner overflow-y-auto">
                        <h3 className="text-lg font-semibold mb-2 border-b border-gray-300 pb-1">Rita’s Feedback</h3>
                        <p className="text-sm leading-relaxed">hello</p>
                    </div>
                </div>
            </div>
        </>
    );
}
