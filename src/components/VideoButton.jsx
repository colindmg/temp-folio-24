import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

import PropTypes from "prop-types";

const VideoButton = ({ playCloseSound, playOpenSound }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenButtonShown, setIsOpenButtonShown] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(5px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.75, delay: 1.0, ease: easeInOut },
      }}
      className={`flex gap-2 items-start mt-1 ${
        isOpen ? "" : "-translate-x-2"
      } transition-all duration-500`}
    >
      {/* DIV CONTENANT LA VIDÉO */}
      <div
        className={`rounded-lg bg-white ${
          isOpen ? "p-1 w-[508px]" : "w-0"
        } transition-all duration-500`}
        style={{ maxWidth: isOpen ? "calc(68vw + 8px)" : "0" }}
      >
        <video
          src="/videos/compil.mp4"
          className={` ${
            isOpen ? "w-[500px] max-w-[68vw] opacity-100" : "w-0 opacity-0"
          } transition-all duration-500 rounded-md`}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* BOUTON D'OUVERTURE DE LA VIDÉO */}
      <button
        className={`group flex relative uppercase tracking-wider w-fit text-neutral-800 bg-white px-4 py-0.5 cursor-pointer pointer-events-auto rounded-full transition-all duration-500 overflow-hidden ${
          !isOpenButtonShown ? "opacity-0" : ""
        } ${isOpen ? "hidden" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
          playOpenSound();
          setIsOpenButtonShown(false);
        }}
      >
        <p className={`${isOpen ? "opacity-0 w-0" : "opacity-100"} mr-2`}>
          WORK EXCERPT
        </p>
        <p
          className={`${
            isOpen ? "opacity-0 w-0" : "opacity-100"
          } group-hover:animate-spin`}
        >
          ✶
        </p>
      </button>

      {/* BOUTON DE FERMETURE DE LA VIDÉO */}
      <button
        className={`group flex relative items-center uppercase tracking-wider text-neutral-800 bg-white cursor-pointer pointer-events-auto rounded-full transition-all duration-500 delay-300 ${
          isOpen ? "w-8 h-8 opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
          playCloseSound();
          setTimeout(() => setIsOpenButtonShown(true), 300);
        }}
      >
        <p
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-45 transition-all duration-300 ${
            isOpen ? "" : "hidden"
          }`}
        >
          ✦
        </p>
      </button>
    </motion.div>
  );
};

VideoButton.propTypes = {
  playCloseSound: PropTypes.func.isRequired,
  playOpenSound: PropTypes.func.isRequired,
};

export default VideoButton;
