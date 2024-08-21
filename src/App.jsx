import { useEffect, useState } from "react";
import BubbleGradient from "./components/BubbleGradient";
import ExperimentsPage from "./components/ExperimentsPage";
import Texts from "./components/Texts";
import noiseImage from "/img/noise.webp";

function App() {
  // VARIABLES
  const [showExperiments, setShowExperiments] = useState(false);
  const [displayMainPage, setDisplayMainPage] = useState(true);

  useEffect(() => {
    if (showExperiments) {
      setTimeout(() => {
        setDisplayMainPage(false);
      }, 1000);
    } else {
      setDisplayMainPage(true);
    }
  }, [showExperiments]);

  return (
    <>
      {/* MAIN PAGE */}
      {displayMainPage ? (
        <div className="relative text-white h-dvh w-screen bg-[#141414] flex flex-col justify-between items-start lg:p-24 md:px-20 sm:px-16 px-12 sm:py-24 py-14">
          <Texts setShowExperiments={setShowExperiments} />
          <BubbleGradient />
          <div
            className="absolute top-0 left-0 w-full h-full z-30 bg-repeat opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: `url(${noiseImage})` }}
          ></div>
        </div>
      ) : null}

      {/* EXPERIMENTS PAGE */}
      <ExperimentsPage
        isVisible={showExperiments}
        setShowExperiments={setShowExperiments}
      />
    </>
  );
}

export default App;
