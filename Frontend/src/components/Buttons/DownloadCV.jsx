import React from 'react';
import './button.css'; // Raw CSS for glow effect
import { Download } from 'lucide-react';

const DownloadCVButton = () => {
  return (

      <a
        href="/cv.pdf"
        download
        className="relative flex gap-4 px-10 py-4 text-white font-semibold text-lg rounded-xl 
                   bg-slate-800/30 backdrop-blur-md border border-transparent 
                   hover:scale-105 transition-transform duration-300 neon-moving-border"
      >
        <Download/>
         Download CV
      </a>

  );
};

export default DownloadCVButton;
