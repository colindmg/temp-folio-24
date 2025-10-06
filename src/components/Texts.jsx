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
    href: "https://linkedin.com/in/colindmg",
    text: "LINKEDIN",
  },
  {
    href: "https://github.com/colindmg",
    text: "GITHUB",
  },
  {
    href: "mailto:colin.demouge@gmail.com",
    text: "CONTACT",
  },
];

const Texts = ({ setShowExperiments, setShowShowreel }) => {
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

    document.querySelector(".showreelLink").style.opacity =
      hoveredLinkRef.current === "showreel" || hoveredLinkRef.current === null
        ? 1
        : 0.5;
  };

  return (
    <>
      <div className="z-20 font-grotesk pointer-events-none flex flex-col items-start gap-1">
        <motion.h1
          key={"col"}
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
          key={"freelance"}
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
            key={link.href}
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
            href={link.href}
            className="group py-0.5"
            onMouseEnter={() => handleMouseEnter(link.href)}
            onMouseLeave={handleMouseLeave}
            onClick={playOpenSound}
          >
            <span className="absolute group-hover:-rotate-45 transition-transform duration-200">
              →
            </span>
            <span className="group-hover:underline underline-offset-4 decoration-[1.5px] pl-5">
              {link.text}
            </span>
          </motion.a>
        ))}

        {/* LIENS DES EXPERIMENTS */}
        <motion.a
          key={"experiments"}
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

        {/* LIEN DU SHOWREEL */}
        <motion.a
          key={"showreel"}
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.75,
              delay: 1.2 + (linksList.length + 1) * 0.1,
              ease: easeInOut,
            },
          }}
          className="showreelLink group py-0.5 cursor-pointer"
          onMouseEnter={() => handleMouseEnter("showreel")}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            playOpenSound();
            setShowShowreel(true);
          }}
        >
          →{" "}
          <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
            SHOWREEL
          </span>
        </motion.a>
      </div>
    </>
  );
};

Texts.propTypes = {
  setShowExperiments: PropTypes.func.isRequired,
  setShowShowreel: PropTypes.func.isRequired,
};

export default Texts;
