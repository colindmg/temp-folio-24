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
  // {
  //   href: "https://www.linkedin.com/in/colin-demouge/",
  //   text: "LINKEDIN",
  // },
  {
    href: "mailto:colin.demouge@gmail.com",
    text: "EMAIL",
  },
];

const Texts = () => {
  // GESTION DES SONS
  // const openSound = new Audio("/sounds/open.wav");
  // const closeSound = new Audio("/sounds/close.wav");
  // openSound.volume = 0.25;
  // closeSound.volume = 0.25;

  return (
    <>
      <div className="z-50 font-grotesk pointer-events-none flex flex-col items-start gap-1">
        <h1 className="text-4xl relative">Col&apos;</h1>
        <h2 className="text-2xl font-thin">Freelance web developer</h2>
        <VideoButton />
      </div>

      <div className="z-50 flex flex-col gap-1 font-grotesk text-xl items-start sm:self-end">
        {linksList.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group"
            onMouseEnter={() => {
              const closeSound = new Audio("/sounds/close.wav");
              closeSound.volume = 0.25;
              closeSound.play();
            }}
            onClick={() => {
              const openSound = new Audio("/sounds/open.wav");
              openSound.volume = 0.25;
              openSound.play();
            }}
          >
            →{" "}
            <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
              {link.text}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Texts;
