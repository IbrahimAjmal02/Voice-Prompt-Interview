"use client"

import { useState } from "react";
import Webcam from "react-webcam";


export default function RitaCam() {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState("Awaiting your magical words...");
    const [feedback, setFeedback] = useState("Rita is preparing her quill...");

    <div className="animate-in slide-in-from-top duration-5000 flex justify-center w-full py-12">
        <div className="relative">
            {/* Ornate frame around webcam */}
            <div className="absolute -inset-8 bg-gradient-to-br from-magical-gold via-magical-bronze to-magical-gold rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -inset-6 border-4 border-magical-gold rounded-3xl opacity-40"></div>
            <div className="absolute -inset-4 border-2 border-magical-bronze rounded-3xl opacity-60"></div>

            <div className={`w-[700px] h-[500px] border-8 ${isRecording ? 'border-magical-crimson animate-magical-glow' : 'border-magical-gold'} bg-gradient-to-br from-slate-900 via-black to-amber-950 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 relative`}>
                {/* Medieval tapestry-style overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-transparent to-amber-950/30"></div>

                <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-4 border-2 border-magical-gold/30 rounded-2xl"></div>
                    <Webcam size={100} className="text-magical-gold/60 drop-shadow-lg" />

                    {isRecording && (
                        <div className="absolute top-6 right-6 flex items-center space-x-3 bg-black/70 px-4 py-2 rounded-full border border-magical-crimson">
                            <div className="w-3 h-3 bg-magical-crimson rounded-full animate-pulse"></div>
                            <span className="font-cinzel text-magical-gold text-sm font-semibold tracking-wide">RECORDING</span>
                        </div>
                    )}
                </div>

                {/* Corner flourishes */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-magical-gold opacity-50"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-magical-gold opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-magical-gold opacity-50"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-magical-gold opacity-50"></div>
            </div>
        </div>
    </div>
}
