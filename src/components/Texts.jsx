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
  return (
    <>
      <div className="z-50 pointer-events-none">
        <h1 className="text-4xl relative font-grotesk">Col&apos;</h1>
        <h2 className="text-2xl font-grotesk font-thin mt-1">
          Freelance web developer
        </h2>
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
