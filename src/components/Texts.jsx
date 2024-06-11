import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="z-50 font-grotesk pointer-events-none flex flex-col items-start gap-1">
        <h1 className="text-4xl relative">Col&apos;</h1>
        <h2 className="text-2xl font-thin">Freelance web developer</h2>
        <div
          className={`uppercase tracking-wider w-fit text-neutral-800 bg-white rounded-full px-4 py-0.5 mt-1 cursor-pointer pointer-events-auto ${
            isOpen ? "rounded-lg py-1 px-1" : "rounded-full"
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p
            className={`${
              isOpen ? "opacity-0 h-0" : "opacity-100 h-fit"
            } transition-all duration-500`}
          >
            WORK EXCERPT<span className="ml-2">✶</span>
          </p>
          <video
            src="/videos/compil.mp4"
            className={` ${
              isOpen ? "w-[500px] max-w-full" : "h-0"
            } transition-all duration-500 rounded-md`}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
      <div className="z-50 flex flex-col gap-1 font-grotesk text-xl items-start">
        {linksList.map((link) => (
          <a key={link.href} href={link.href} className="group">
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
