"use client"


import { useState } from "react";
import Webcam from "react-webcam";




export default function Header() {
   const [isRecording, setIsRecording] = useState(false);
   //const [transcript, setTranscript] = useState("Awaiting your magical words...");
   const [feedback, setFeedback] = useState("Rita is preparing her quill...");
   const [text, setText] = useState("...");


   const handleStart = () => {
       setIsRecording(true);
       const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
       const recognition = new SpeechRecognition();


       recognition.onresult = async (event) => {
           const transcript = event.results[0][0].transcript;
           setText(transcript);
        
           try {
             const res = await fetch('/api/ritasreview', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                 text: transcript,
                 question: "Tell me about yourself and why should we hire you?: (Software Developer Interview)"
               })
             });
             const data = await res.json();
             setFeedback(data.text);
           } catch (err) {
             console.error('API error:', err);
           }
         };


       recognition.start();
   };


   const handleEnd = () => {
       setIsRecording(false);
       //setTranscript("Thank you for sharing your story. The quill has captured every word with magical precision.");
       //setFeedback("*Rita adjusts her jeweled spectacles* \n\nDarling, your story has such potential! Though perhaps we could add a touch more drama? The public does love a scandal, after all. Your delivery was confident, but remember - in the wizarding world, perception is everything. \n\n★★★★☆ \n\nA delightfully revealing interview. Rita suggests you speak with more theatrical flair next time!");
   };


   return (
       <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 relative overflow-hidden">
           {/* Medieval Header with Illuminated Manuscript Style */}
           <div className="animate-in fade-in zoom-in duration-[3000ms] flex justify-center items-center w-full h-[140px] border-b-8 border-magical-gold bg-gradient-to-r from-amber-950 via-yellow-900 to-amber-950 shadow-2xl relative overflow-hidden">
               {/* Ornate background pattern */}
               <div className="absolute inset-0 opacity-10">
                   <div className="w-full h-full bg-repeat" style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
                   }}></div>
               </div>


               <div className="flex flex-col items-center space-y-2 z-10">
                   <h1 className="font-cinzel text-5xl font-bold text-magical-gold tracking-wider drop-shadow-lg">
                       Rita Skeeter's
                   </h1>
                   <div className="flex items-center space-x-3">
                       <div className="w-16 h-1 bg-gradient-to-r from-transparent via-magical-gold to-transparent"></div>
                       <p className="font-fell text-xl italic text-magical-bronze">
                           Interview Chamber
                       </p>
                       <div className="w-16 h-1 bg-gradient-to-r from-transparent via-magical-gold to-transparent"></div>
                   </div>
                   <p className="font-crimson text-sm text-magical-bronze italic">
                       "Where Truth Meets Embellishment"
                   </p>
               </div>


               {/* Ornate right decoration */}
               <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                   <img
                       src="/Logo.png"
                       width={60}
                       height={60}
                       alt="Rita's Quill"
                       className="quill-icon drop-shadow-lg opacity-90"
                   />
                   <div className="absolute -top-2 -right-2 w-4 h-4 bg-magical-gold rounded-full animate-pulse shadow-lg"></div>
               </div>


               {/* Medieval corner decorations */}
               <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-magical-gold opacity-60"></div>
               <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-magical-gold opacity-60"></div>
               <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-magical-gold opacity-60"></div>
               <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-magical-gold opacity-60"></div>
           </div>


           {/* Medieval Scrying Crystal (Webcam) */}
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


           {/* Medieval Control Panel */}
           <div className="flex justify-center relative z-20 mb-12">
               <div className="relative bg-gradient-to-r from-amber-950 via-yellow-900 to-amber-950 rounded-2xl shadow-2xl p-6 border-4 border-magical-gold">
                   {/* Ornate decorative elements */}
                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-magical-gold rotate-45 border-2 border-amber-950"></div>
                   <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-magical-gold rotate-45 border-2 border-amber-950"></div>


                   <div className="flex items-center space-x-8">
                       <button
                           onClick={handleStart}
                           disabled={isRecording}
                           className={`group relative w-32 h-12 ${isRecording ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'} transition-all duration-300`}
                       >
                           <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-800 rounded-xl border-2 border-green-900 shadow-lg"></div>
                           <div className="absolute inset-1 bg-gradient-to-br from-green-500 to-green-700 rounded-lg"></div>
                           <span className='relative z-10 text-white font-cinzel font-bold text-lg tracking-wide drop-shadow-md'>Begin</span>
                           <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       </button>


                       <div className="w-8 h-8 border-2 border-magical-gold rounded-full flex items-center justify-center bg-magical-bronze">
                           <div className="w-3 h-3 bg-magical-gold rounded-full animate-pulse"></div>
                       </div>


                       <button
                           onClick={handleEnd}
                           disabled={!isRecording}
                           className={`group relative w-32 h-12 ${!isRecording ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'} transition-all duration-300`}
                       >
                           <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-red-700 to-red-900 rounded-xl border-2 border-red-900 shadow-lg"></div>
                           <div className="absolute inset-1 bg-gradient-to-br from-red-600 to-red-800 rounded-lg"></div>
                           <span className='relative z-10 text-white font-cinzel font-bold text-lg tracking-wide drop-shadow-md'>Finish</span>
                           <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       </button>
                   </div>
               </div>
           </div>


           {/* Illuminated Manuscript Review Section */}
           <div className="animate-in fade-in zoom-in duration-5000 flex flex-col items-center w-[90%] max-w-6xl mx-auto mb-16">
               <div className="relative w-full bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 border-8 border-magical-gold rounded-3xl shadow-2xl p-10 overflow-hidden">
                   {/* Parchment texture overlay */}
                   <div className="absolute inset-0 opacity-30 bg-repeat" style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v30h30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                   }}></div>


                   {/* Illuminated header */}
                   <div className="relative text-center border-b-4 border-magical-gold pb-6 mb-8">
                       <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-magical-gold to-magical-bronze rounded-lg border-2 border-amber-950 flex items-center justify-center shadow-lg">
                           <span className="font-cinzel text-2xl font-bold text-amber-950">★</span>
                       </div>
                       <h2 className="font-cinzel text-4xl font-bold text-amber-950 tracking-wider drop-shadow-sm">
                           Rita's Exclusive Review
                       </h2>
                       <p className="font-fell text-lg italic text-magical-bronze mt-3">
                           "The truth will out, with a little embellishment"
                       </p>
                       <div className="absolute right-0 top-0 w-16 h-16 bg-gradient-to-br from-magical-bronze to-magical-gold rounded-lg border-2 border-amber-950 flex items-center justify-center shadow-lg">
                           <span className="font-cinzel text-2xl font-bold text-amber-950">★</span>
                       </div>
                   </div>


                   <div className="relative flex flex-col lg:flex-row w-full justify-between space-y-8 lg:space-y-0 lg:space-x-10">
                       {/* Enhanced Transcript Scroll */}
                       <div className="relative w-full lg:w-1/2">
                           <div className="absolute -inset-2 bg-gradient-to-br from-magical-gold to-magical-bronze rounded-2xl opacity-30"></div>
                           <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 border-4 border-magical-bronze rounded-2xl shadow-inner p-6">
                               <div className="flex items-center mb-4 border-b-2 border-magical-gold pb-3">
                                   <div className="w-8 h-8 bg-gradient-to-br from-magical-gold to-magical-bronze rounded-full mr-4 flex items-center justify-center border-2 border-amber-950">
                                       <span className="font-cinzel text-sm font-bold text-amber-950">Q</span>
                                   </div>
                                   <h3 className="font-cinzel text-xl font-bold text-amber-950 tracking-wide">Quick-Quotes Transcript</h3>
                               </div>
                               <div className="max-h-80 overflow-y-auto custom-scrollbar">
                                   <p className="font-crimson text-base leading-relaxed text-amber-950 whitespace-pre-wrap">
                                       {text}
                                   </p>
                               </div>
                           </div>
                       </div>


                       {/* Enhanced Feedback Scroll */}
                       <div className="relative w-full lg:w-1/2">
                           <div className="absolute -inset-2 bg-gradient-to-br from-magical-bronze to-magical-gold rounded-2xl opacity-30"></div>
                           <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 border-4 border-magical-bronze rounded-2xl shadow-inner p-6">
                               <div className="flex items-center mb-4 border-b-2 border-magical-gold pb-3">
                                   <div className="w-8 h-8 bg-gradient-to-br from-magical-bronze to-magical-gold rounded-full mr-4 flex items-center justify-center border-2 border-amber-950">
                                       <span className="font-cinzel text-sm font-bold text-amber-950">R</span>
                                   </div>
                                   <h3 className="font-cinzel text-xl font-bold text-amber-950 tracking-wide">Rita's Critique</h3>
                               </div>
                               <div className="max-h-80 overflow-y-auto custom-scrollbar">
                                   <p className="font-crimson text-base leading-relaxed text-amber-950 whitespace-pre-wrap">
                                       {feedback}
                                   </p>
                               </div>
                           </div>
                       </div>
                   </div>


                   {/* Illuminated corner decorations */}
                   <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-magical-gold opacity-60"></div>
                   <div className="absolute top-6 right-6 w-12 h-12 border-t-4 border-r-4 border-magical-gold opacity-60"></div>
                   <div className="absolute bottom-6 left-6 w-12 h-12 border-b-4 border-l-4 border-magical-gold opacity-60"></div>
                   <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-magical-gold opacity-60"></div>
               </div>
           </div>
       </div>
   );
}
