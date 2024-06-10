import noiseImage from "../public/img/noise.webp";
// import BubbleGradient from "./components/BubbleGradient";

function App() {
  return (
    <>
      <div className="relative text-white h-screen w-screen bg-[#141414] flex flex-col p-24">
        <h1 className="text-4xl relative z-50 font-grotesk">colindmg</h1>
        <h2 className="text-2xl font-grotesk font-thin">
          Freelance web developer
        </h2>
        {/* <BubbleGradient /> */}
        <div
          className="absolute top-0 left-0 w-full h-full z-30 bg-repeat opacity-[0.03]"
          style={{ backgroundImage: `url(${noiseImage})` }}
        ></div>
      </div>
    </>
  );
}

export default App;
