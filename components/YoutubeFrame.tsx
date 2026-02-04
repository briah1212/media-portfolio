
import React from 'react';

interface YoutubeFrameProps {
  videoUrl: string;
  title: string;
  description: string;
}

const YoutubeFrame: React.FC<YoutubeFrameProps> = ({ videoUrl, title, description }) => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden soft-shadow border-4 border-white">
      <div className="aspect-video bg-gray-100 relative group">
        <video
          src={videoUrl}
          controls
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default YoutubeFrame;
