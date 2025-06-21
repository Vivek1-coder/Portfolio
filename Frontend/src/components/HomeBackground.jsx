// import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "../components/TypingAnimation/Typewriter";
import Social from "../components/Social/Social.jsx";
import DownloadCVButton from "../components/Buttons/DownloadCV.jsx";
// import { Button } from "@/components/ui/button";
// import AnimatedBackground from '@/components/AnimatedBackground'
// import HaloBackground from '@/components/HomeBackground'

export default function HaloBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Ensure THREE is globally available
    window.THREE = THREE;

    const script = document.createElement("script");
    script.src = "/vanta.halo.min.js"; // path to your local file
    script.async = true;

    script.onload = () => {
      if (!vantaEffect && window.VANTA && window.VANTA.HALO) {
        const effect = window.VANTA.HALO({
          el: vantaRef.current,
          mmouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x5ae4,
          amplitudeFactor: 1.2,
          size: 1.5,
        });
        setVantaEffect(effect);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen flex justify-center items-center bg-black text-white overflow-x-hidden overflow-y-hidden"
    >
      {/* <AnimatedBackground/> */}
      {/* Text Section */}
        <div className="w-full max-md:min-h-screen  h-full flex max-lg:flex-col justify-center items-center backdrop-blur-3xl z-30 overflow-y-auto">
         
      <div className="z-30 w-full max-md:mt-28 max-md:mb-10 h-full lg:w-1/2 flex flex-col justify-center items-center text-center gap-4 max-lg:pt-20 max-lg:px-4 lg:p-10 ">
       <div className="z-30 hidden max-lg:flex w-1/2  lg:h-full justify-center items-center mb-10 md:mb-20">
        <div className="relative animate-fade-in">
          <div className="relative w-48 h-48 md:w-96 md:h-96 mx-auto">
            {/* Neon rotating border */}
            <div className="absolute inset-0 rounded-full animate-[spin-slow_6s_linear_infinite] before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500 before:via-purple-700 before:to-pink-800 before:blur-sm before:opacity-90"></div>

            {/* Image container */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-purple-400 animate-neon-shadow">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating orbs for depth */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#3B82F6] rounded-full animate-bounce shadow-lg shadow-blue-500/50"></div>
          <div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8B5CF6] rounded-full animate-bounce shadow-lg shadow-purple-500/50"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-md md:text-xl">HII I'm</p>
          <p className="font-bold text-2xl md:text-5xl">Vivek</p>
          <div className="font-bold text-lg md:text-2xl">
            <Typewriter words={["Web Developer", "AI-ML Engineer","Tech Lover"]} />
          </div>
        </div>

        <div className="text-white text-sm md:text-md font-bold w-full  lg:w-3/4 background2 lg:bg-slate-100 h-auto text-center justify-center rounded-xl p-6">
          <p>
          I create beautiful, responsive web applications with modern technologies. Passionate about clean code, user experience, and continuous learning.
          </p>
        </div>
        {/* <div><a href="../assets/resume/Vivek_Resume.pdf" target='_blank'><button className='w-60 h-10 m-2 bg-gray-900 bg-opacity-30 hover:scale-105 text-white rounded-xl shadow-md shadow-violet-500'>Download Resume</button></a></div> */}
       

        <div>
          <Social />
        </div>
         <DownloadCVButton />
        
      </div>

      <div className="z-30 hidden lg:flex w-1/2 h-full justify-center items-center">
        <div className="relative animate-fade-in">
          <div className="relative w-96 h-96 mx-auto">
            {/* Neon rotating border */}
            <div className="absolute inset-0 rounded-full animate-[spin-slow_6s_linear_infinite] before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500 before:via-purple-700 before:to-pink-800 before:blur-sm before:opacity-90"></div>

            {/* Image container */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-purple-400 animate-neon-shadow">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating orbs for depth */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#3B82F6] rounded-full animate-bounce shadow-lg shadow-blue-500/50"></div>
          <div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8B5CF6] rounded-full animate-bounce shadow-lg shadow-purple-500/50"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>
      </div>
    </div>
  );
}
