
import React, { useRef, useState } from 'react';

interface PhoneFrameProps {
  videoUrl: string;
  title: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ videoUrl, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[280px] mx-auto">
      {/* Figma-style Device Frame */}
      <div className="relative border-[8px] border-slate-900 rounded-[3rem] h-[550px] w-full max-w-[270px] soft-shadow overflow-hidden bg-black shrink-0">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
        
        {/* Video Content */}
        <video
          ref={videoRef}
          src={videoUrl}
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />

        {/* Play Overlay */}
        <div 
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50">
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            )}
          </div>
        </div>
      </div>
      <p className="mt-4 text-center font-bold text-slate-700">{title}</p>
    </div>
  );
};

export default PhoneFrame;
