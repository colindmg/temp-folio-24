import clsx from "clsx";
import { easeInOut, motion, useIsPresent } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const VideoButton = ({ playCloseSound, playOpenSound }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenButtonShown, setIsOpenButtonShown] = useState(true);
  const isPresent = useIsPresent();
  const [addTransition, setAddTransition] = useState(false);

  useEffect(() => {
    if (isPresent) {
      setTimeout(() => {
        setAddTransition(true);
      }, 1750);
    }
  }, [isPresent]);

  return (
    <motion.div
      key={"video-button"}
      initial={{ opacity: 0, filter: "blur(5px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.75, delay: 1.0, ease: easeInOut },
      }}
      className={clsx(
        "flex gap-2 items-start mt-1",
        isOpen ? "" : "-translate-x-2",
        addTransition && "transition-all duration-500"
      )}
    >
      {/* DIV CONTENANT LA VIDÉO */}
      <div
        className={clsx(
          "rounded-lg bg-white",
          isOpen ? "p-1 w-[508px]" : "w-0",
          addTransition && "transition-all duration-500"
        )}
        style={{ maxWidth: isOpen ? "calc(68vw + 8px)" : "0" }}
      >
        <video
          src="/videos/compil2.mp4"
          className={clsx(
            isOpen ? "w-[500px] max-w-[68vw] opacity-100" : "w-0 opacity-0",
            addTransition && "transition-all duration-500",
            "rounded-md"
          )}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* BOUTON D'OUVERTURE DE LA VIDÉO */}
      <button
        className={clsx(
          "group flex relative uppercase tracking-wider w-fit text-neutral-800 bg-white px-4 py-0.5 cursor-pointer pointer-events-auto rounded-full",
          addTransition && "transition-all duration-500",
          "overflow-hidden",
          !isOpenButtonShown && "opacity-0",
          isOpen && "hidden"
        )}
        onClick={() => {
          setIsOpen(!isOpen);
          playOpenSound();
          setIsOpenButtonShown(false);
        }}
      >
        <p className={clsx(isOpen ? "opacity-0 w-0" : "opacity-100", "mr-2")}>
          WORK EXCERPT
        </p>
        <p
          className={clsx(
            isOpen ? "opacity-0 w-0" : "opacity-100",
            "group-hover:animate-spin"
          )}
        >
          ✶
        </p>
      </button>

      {/* BOUTON DE FERMETURE DE LA VIDÉO */}
      <button
        className={clsx(
          "group flex relative items-center uppercase tracking-wider text-neutral-800 bg-white cursor-pointer pointer-events-auto rounded-full",
          addTransition && "transition-all duration-500 delay-300",
          isOpen ? "w-8 h-8 opacity-100" : "opacity-0"
        )}
        onClick={() => {
          setIsOpen(!isOpen);
          playCloseSound();
          setTimeout(() => setIsOpenButtonShown(true), 300);
        }}
      >
        <p
          className={clsx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-45 transition-all duration-300",
            !isOpen && "hidden"
          )}
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
