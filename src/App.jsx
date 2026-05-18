import ShowreelVideo from "./components/ShowreelVideo";

const App = () => {
  return (
    <div className="relative p-8 flex flex-col justify-between w-full h-dvh bg-[#FAFAFA] text-[#1A1A1A] font-medium tracking-[-0.06em] gap-8">
      <div className="flex flex-col text-6xl w-[700px] max-w-full leading-[0.9]">
        <h1 className="font-[550]">/colindmg</h1>
        <p>freelance creative developer based in paris.</p>
      </div>

      <div className="flex flex-col w-[700px] max-w-full gap-4">
        <p className="text-xl leading-[1.1] tracking-[-0.02em]">
          Here is some of my work :{" "}
          <a
            href="https://naam-journey.netlify.app"
            target="_blank"
            className="link"
          >
            Naam
          </a>{" "}
          (narrative website) /{" "}
          <a
            href="https://www.pacomepertant.com"
            target="_blank"
            className="link"
          >
            Pacôme Pertant
          </a>{" "}
          (portfolio) /{" "}
          <a
            href="https://etheris.netlify.app"
            target="_blank"
            className="link"
          >
            Etheris
          </a>{" "}
          (school project) /{" "}
          <a
            href="https://lab-colindmg.netlify.app"
            target="_blank"
            className="link"
          >
            Lab
          </a>{" "}
          (webgl experiments) & more on{" "}
          <a
            href="https://twitter.com/colindmg"
            target="_blank"
            className="link"
          >
            X
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/colindmg/"
            target="_blank"
            className="link"
          >
            Linkedin
          </a>
          . Contact me at{" "}
          <a href="mailto:contact@colindmg.com" className="link">
            contact@colindmg.com
          </a>
          .
        </p>

        <ShowreelVideo />
      </div>

      <div className="absolute inset-0 pointer-events-none grain opacity-10"></div>
    </div>
  );
};

export default App;
