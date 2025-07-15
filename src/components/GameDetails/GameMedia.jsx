import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";

const GameMedia = () => {
  const screenshots = [
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/90d06d0327-391ae284a6348971d56c.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/562ef01ace-d3bc8f5fe1279310f0a4.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/5cae88c6c9-8a5fa9fdf34438b7b765.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/082ee5791a-a261ba00656b7bf1810e.png",
  ];

  const playerRef = useRef(null);

  const handlePlayButtonClick = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold mb-4 text-white">Gameplay Trailer</h3>
        <div className="rounded-lg overflow-hidden mb-6">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="500px"
            controls={true}
            playing={handlePlayButtonClick}
            loop={false}
          />
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-bold mb-6">Screenshots</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Screenshot ${idx + 1}`}
              className="rounded-md w-full h-52 object-cover"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameMedia;
