import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const linksList = [
  {
    href: "https://artspiral.netlify.app/",
    text: "ART ⎯ SPIRAL",
  },
  {
    href: "https://isometricmusicplayer.netlify.app/",
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
    href: "https://hoverlist.netlify.app/",
    text: "LOCOMOTIVE.CA HOVER EFFECT",
  },
];

const ExperimentsPage = ({ isVisible, setShowExperiments }) => {
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

  // ANIMATION GSAP
  const titleRef = useRef(null);
  const linksRef = useRef(null);
  const closeButtonRef = useRef(null);

  useGSAP(() => {
    if (isVisible) {
      gsap.from(titleRef.current, {
        duration: 1,
        filter: "blur(10px)",
        opacity: 0,
        ease: "power2.out",
      });

      gsap.fromTo(
        linksRef.current.children,
        {
          y: 10,
          filter: "blur(5px)",
          opacity: 0,
        },
        {
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
        }
      );

      gsap.from(closeButtonRef.current, {
        opacity: 0,
        filter: "blur(5px)",
        duration: 0.5,
        delay: 0.8,
        ease: "power2.out",
      });
    } else if (!isVisible) {
      gsap.to(titleRef.current, {
        duration: 0.5,
        filter: "blur(10px)",
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
          setTimeout(() => {
            titleRef.current.style.opacity = "1";
            titleRef.current.style.filter = "blur(0px)";
          }, 500);
        },
      });

      gsap.to(linksRef.current.children, {
        duration: 0.5,
        y: -10,
        filter: "blur(5px)",
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
      });

      gsap.to(closeButtonRef.current, {
        opacity: 0,
        filter: "blur(5px)",
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setTimeout(() => {
            closeButtonRef.current.style.opacity = "1";
            closeButtonRef.current.style.filter = "blur(0px)";
          }, 500);
        },
      });
    }
  }, [isVisible]);

  return (
    <div
      style={{
        backgroundImage: "url('/img/bg-light.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        opacity: isVisible ? "1" : "0",
        transitionDelay: isVisible ? "0s" : "0.5s",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      className="z-30 h-dvh w-screen fixed top-0 left-0 bg-[#F9F4FA] flex flex-col justify-center items-center gap-10 text-[#141414] font-grotesk transition-opacity duration-500 ease-in-out"
    >
      {/* TITLE */}
      <h1 ref={titleRef} className="text-3xl relative uppercase font-medium">
        Experiments
      </h1>

      {/* LINKS */}
      <div
        ref={linksRef}
        className="small-link z-20 flex flex-col items-center font-grotesk text-xl"
      >
        {linksList.map((link) => (
          <a
            key={link.href}
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
          </a>
        ))}
      </div>

      {/* CLOSE BUTTON */}
      <div ref={closeButtonRef}>
        <button
          className="group flex relative items-center uppercase tracking-wider text-[#F9F4FA] bg-[#141414] pointer-events-auto rounded-full transition-all duration-500 delay-300 px-4 py-0.5 pr-10 cursor-pointer"
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
      </div>
    </div>
  );
};

ExperimentsPage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setShowExperiments: PropTypes.func.isRequired,
};

export default ExperimentsPage;
