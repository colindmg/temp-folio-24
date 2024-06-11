// import BubbleGradient from "./components/BubbleGradient";
import Texts from "./components/Texts";
import noiseImage from "/img/noise.webp";

function App() {
  return (
    <>
      <div className="relative text-white h-screen w-screen bg-[#141414] flex flex-col justify-between items-start lg:p-24 md:px-20 sm:px-16 px-12 py-24">
        <Texts />
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
