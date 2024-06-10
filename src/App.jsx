import noiseImage from "../public/img/noise.webp";
import BubbleGradient from "./components/BubbleGradient";

function App() {
  return (
    <>
      <div className="relative h-screen w-screen">
        <h1 className="text-4xl font-bold uppercase relative z-50">COLINDMG</h1>
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
