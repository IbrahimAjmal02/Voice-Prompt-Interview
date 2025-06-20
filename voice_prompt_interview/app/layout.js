import { Geist, Geist_Mono, Cinzel, IM_Fell_English } from "next/font/google";
import "./globals.css";


// Font setup
const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});


const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"],
});


const cinzel = Cinzel({
 variable: "--font-cinzel",
 subsets: ["latin"],
 weight: ["400", "700"],
});


const imFellEnglish = IM_Fell_English({
 variable: "--font-fell",
 subsets: ["latin"],
 weight: ["400"],
});


// Metadata
export const metadata = {
 title: "Rita Skeeter | AI Interviewer",
 description: "A magical AI interviewer that gives feedback on your responses.",
};


// Root Layout
export default function RootLayout({ children }) {
 return (
   <html lang="en">
     <body
       className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${imFellEnglish.variable} antialiased bg-yellow-50 text-gray-900 pb-10`}
     >
       {children}
     </body>
   </html>
 );
}
