import PropTypes from "prop-types";

const linksList = [
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

  return (
    <div
      style={{
        backgroundImage: "url('/img/bg-light.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        opacity: isVisible ? "1" : "0",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      className="z-30 h-dvh w-screen fixed top-0 left-0 bg-[#F9F4FA] flex flex-col justify-center items-center gap-10 text-[#141414] font-grotesk transition-opacity duration-500 ease-in-out"
    >
      {/* TITLE */}
      <h1 className="text-3xl relative uppercase font-medium">Experiments</h1>

      {/* LINKS */}
      <div className="small-link z-20 flex flex-col items-center font-grotesk text-xl">
        {linksList.map((link) => (
          <a
            key={link.href}
            target="_blank"
            href={link.href}
            className="group peer py-0.5"
            onMouseEnter={() => {
              playCloseSound();
            }}
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
      <button
        className="group flex relative items-center uppercase tracking-wider text-[#F9F4FA] bg-[#141414] pointer-events-auto rounded-full transition-all duration-500 delay-300 px-4 py-0.5 pr-10 cursor-pointer "
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
  );
};

ExperimentsPage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setShowExperiments: PropTypes.func.isRequired,
};

export default ExperimentsPage;
