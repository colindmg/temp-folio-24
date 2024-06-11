import { useState } from "react";

const VideoButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex gap-2 items-start mt-1 ${
        isOpen ? "" : "-translate-x-2"
      } transition-all duration-500`}
    >
      <div
        className={`rounded-lg bg-white ${
          isOpen ? "p-1" : "w-0"
        } transition-all duration-500`}
      >
        <video
          src="/videos/compil.mp4"
          className={` ${
            isOpen ? "w-[500px] max-w-full" : "w-0"
          } transition-all duration-500 rounded-md`}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <button
        className={`group flex relative items-center uppercase tracking-wider w-fit text-neutral-800 bg-white px-4 py-0.5 cursor-pointer pointer-events-auto rounded-full transition-all duration-500 ${
          isOpen ? "px-1 py-1 w-8 h-8" : ""
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className={`${isOpen ? "hidden" : "opacity-100"}`}>WORK EXCERPT</p>
        <p
          className={`${
            isOpen ? "hidden" : "opacity-100"
          } ml-2 group-hover:animate-spin`}
        >
          ✶
        </p>
        <p
          className={`${
            isOpen ? "opacity-100 h-fit rotate-360" : "opacity-0 h-0 w-0"
          } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          ✦
        </p>
      </button>
    </div>
  );
};

export default VideoButton;
