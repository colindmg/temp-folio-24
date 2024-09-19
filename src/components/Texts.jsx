import { easeInOut, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
import VideoButton from "./VideoButton";

const linksList = [
  {
    href: "https://x.com/colindmg",
    text: "TWITTER / X",
  },
  {
    href: "https://github.com/colindmg",
    text: "GITHUB",
  },
  {
    href: "mailto:colin.demouge@gmail.com",
    text: "EMAIL",
  },
];

const Texts = ({ setShowExperiments }) => {
  // GESTION DES SONS
  const openSound = new Audio("/sounds/open.wav");
  const closeSound = new Audio("/sounds/close.wav");

  const playOpenSound = () => {
    openSound.currentTime = 0;
    openSound.volume = 0.25;
    openSound.play();
  };

  const playCloseSound = () => {
    closeSound.currentTime = 0;
    closeSound.volume = 0.25;
    closeSound.play();
  };

  // GESTION DU LIEN HOVERED
  const hoveredLinkRef = useRef(null);

  const handleMouseEnter = (linkHref) => {
    hoveredLinkRef.current = linkHref;
    playCloseSound();
    updateLinksOpacity();
  };

  const handleMouseLeave = () => {
    hoveredLinkRef.current = null;
    updateLinksOpacity();
  };

  const updateLinksOpacity = () => {
    document.querySelectorAll("a").forEach((link) => {
      if (
        hoveredLinkRef.current === null ||
        hoveredLinkRef.current === link.href
      ) {
        link.style.opacity = 1;
      } else {
        link.style.opacity = 0.5;
      }
    });

    document.querySelector(".experimentLink").style.opacity =
      hoveredLinkRef.current === "experiments" ||
      hoveredLinkRef.current === null
        ? 1
        : 0.5;
  };

  return (
    <>
      <div className="z-20 font-grotesk pointer-events-none flex flex-col items-start gap-1">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.75, delay: 0.5, ease: easeInOut },
          }}
          className="text-4xl relative"
        >
          Col&apos;
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.75, delay: 0.7, ease: easeInOut },
          }}
          className="text-2xl font-thin"
        >
          Freelance web developer
        </motion.h2>
        <VideoButton
          playCloseSound={playCloseSound}
          playOpenSound={playOpenSound}
        />
      </div>

      <div className="z-20 flex flex-col font-grotesk text-xl items-start sm:self-end">
        {linksList.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.75,
                delay: 1.2 + index * 0.1,
                ease: easeInOut,
              },
            }}
            key={link.href}
            href={link.href}
            className="group py-0.5"
            onMouseEnter={() => handleMouseEnter(link.href)}
            onMouseLeave={handleMouseLeave}
            onClick={playOpenSound}
          >
            →{" "}
            <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
              {link.text}
            </span>
          </motion.a>
        ))}

        {/* LIENS DES EXPERIMENTS */}
        <motion.a
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.75,
              delay: 1.2 + linksList.length * 0.1,
              ease: easeInOut,
            },
          }}
          className="experimentLink group py-0.5 cursor-pointer"
          onMouseEnter={() => handleMouseEnter("experiments")}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            playOpenSound();
            setShowExperiments(true);
          }}
        >
          →{" "}
          <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
            EXPERIMENTS
          </span>
        </motion.a>
      </div>
    </>
  );
};

Texts.propTypes = {
  setShowExperiments: PropTypes.func.isRequired,
};

export default Texts;
