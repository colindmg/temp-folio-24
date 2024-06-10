import noiseImage from "../public/img/noise.webp";
import BubbleGradient from "./components/BubbleGradient";

function App() {
  return (
    <>
      <div className="relative text-white h-screen w-screen bg-[#141414] flex flex-col justify-between items-start lg:p-24 md:p-20 sm:p-16 p-12">
        <div className="z-50">
          <h1 className="text-4xl relative font-grotesk">Col&apos;</h1>
          <h2 className="text-2xl font-grotesk font-thin mt-1">
            Freelance web developer
          </h2>
        </div>
        <div className="z-50 flex flex-col gap-1 font-grotesk text-xl items-start">
          <a href="https://x.com/colindmg" className="group">
            →{" "}
            <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
              TWITTER / X
            </span>
          </a>
          <a href="https://github.com/colindmg" className="group">
            →{" "}
            <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
              GITHUB
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/colin-demouge/"
            className="group"
          >
            →{" "}
            <span className="group-hover:underline underline-offset-4 decoration-[1.5px]">
              LINKEDIN
            </span>
          </a>
        </div>

        <BubbleGradient />
        <div
          className="absolute top-0 left-0 w-full h-full z-30 bg-repeat opacity-[0.03]"
          style={{ backgroundImage: `url(${noiseImage})` }}
        ></div>
      </div>
    </>
  );
}

export default App;
