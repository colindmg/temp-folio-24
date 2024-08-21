import PropTypes from "prop-types";
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

  return (
    <>
      <div className="z-20 font-grotesk pointer-events-none flex flex-col items-start gap-1">
        <h1 className="text-4xl relative">Col&apos;</h1>
        <h2 className="text-2xl font-thin">Freelance web developer</h2>
        <VideoButton
          playCloseSound={playCloseSound}
          playOpenSound={playOpenSound}
        />
      </div>

      <div className="small-link z-20 flex flex-col font-grotesk text-xl items-start sm:self-end">
        {linksList.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group peer py-0.5"
            onMouseEnter={() => {
              playCloseSound();
            }}
            onClick={() => {
              playOpenSound();
            }}
          >
            →{" "}
            <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
              {link.text}
            </span>
          </a>
        ))}

        {/* LIENS DES EXPERIMENTS */}
        <a
          className="group peer py-0.5 cursor-pointer"
          onMouseEnter={() => {
            playCloseSound();
          }}
          onClick={() => {
            playOpenSound();
            setShowExperiments(true);
          }}
        >
          →{" "}
          <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
            EXPERIMENTS
          </span>
        </a>
      </div>
    </>
  );
};

Texts.propTypes = {
  setShowExperiments: PropTypes.func.isRequired,
};

export default Texts;
