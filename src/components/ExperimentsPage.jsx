import { useGSAP } from "@gsap/react";
import { easeInOut, easeOut, motion } from "framer-motion";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

const linksList = [
  {
    href: "https://labcolindmg.netlify.app/",
    text: "WEBGL EXPERIMENTS",
  },
  {
    href: "https://artstuffs.netlify.app/",
    text: "ART ⎯ STUFFS",
  },
  {
    // href: "https://isometricmusicplayer.netlify.app/",
    href: "https://recordsss.vercel.app/share/colin.demouge",
    text: "ISOMETRIC MUSIC PLAYER",
  },
  {
    href: "https://gallery-colindmg.netlify.app/",
    text: "ONLINE ART GALLERY",
  },
  {
    href: "https://moviesforyoupage.netlify.app/",
    text: "NETFLIX 'FOR YOU' PAGE",
  },
  {
    href: "https://www.x.com/colindmg",
    text: "& MORE ON X →",
  },
];

const ExperimentsPage = ({ setShowExperiments }) => {
  // REFS
  const linksRef = useRef(null);

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
    if (linksRef.current) {
      Array.from(linksRef.current.children).forEach((link) => {
        if (
          hoveredLinkRef.current === null ||
          hoveredLinkRef.current === link.href
        ) {
          link.style.opacity = "1";
        } else {
          link.style.opacity = "0.5";
        }
      });
    }
  };

  useEffect(() => {
    updateLinksOpacity();
  }, []);

  return (
    <motion.div
      key={"experiments-page"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75, ease: easeOut } }}
      exit={{
        opacity: 0,
        transition: { delay: 0.3, duration: 0.5, ease: easeInOut },
      }}
      style={{
        backgroundImage: "url('/img/bg-light.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      className="z-30 h-dvh w-screen fixed top-0 left-0 bg-[#F9F4FA] flex flex-col justify-center items-center gap-10 text-[#141414] font-grotesk"
    >
      <div className="grain absolute top-0 left-0 w-full h-full z-[-1]"></div>

      {/* TITLE */}
      <motion.h1
        key={"experiments-page-title"}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { delay: 0.25, duration: 0.5, ease: easeInOut },
        }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        className="text-3xl relative uppercase font-medium"
      >
        Experiments
      </motion.h1>

      {/* LINKS */}
      <div
        key={"experiments-page-links"}
        ref={linksRef}
        className="small-link z-20 flex flex-col items-center font-grotesk text-xl"
      >
        {linksList.map((link, index) => (
          <motion.a
            key={link.href}
            initial={{ y: 10, filter: "blur(5px)", opacity: 0 }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
              transition: {
                delay: 0.25 + index * 0.1,
                duration: 0.5,
                ease: easeInOut,
              },
            }}
            exit={{
              y: -10,
              filter: "blur(5px)",
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: easeOut,
                delay: index * 0.1,
              },
            }}
            target="_blank"
            href={link.href}
            className="group py-0.5"
            onMouseEnter={() => handleMouseEnter(link.href)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              playOpenSound();
            }}
          >
            <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
              {link.text}
            </span>
          </motion.a>
        ))}
      </div>

      {/* CLOSE BUTTON */}
      <motion.div
        key={"experiments-close-button"}
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { delay: 0.75, duration: 0.5, ease: easeInOut },
        }}
        exit={{
          opacity: 0,
          filter: "blur(10px)",
          transition: { duration: 0.5, ease: easeOut },
        }}
      >
        <button
          className="group flex relative items-center uppercase tracking-wider text-[#F9F4FA] bg-[#141414] pointer-events-auto rounded-full px-4 py-0.5 pr-10 cursor-pointer"
          onClick={() => {
            setShowExperiments(false);
            playCloseSound();
          }}
        >
          CLOSE{"    "}
          <p className="absolute top-1/2 right-4 -translate-y-1/2 group-hover:rotate-45 transition-all duration-300">
            ✦
          </p>
        </button>
      </motion.div>
    </motion.div>
  );
};

ExperimentsPage.propTypes = {
  setShowExperiments: PropTypes.func.isRequired,
};

export default ExperimentsPage;
