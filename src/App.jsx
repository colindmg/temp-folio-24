import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ExperimentsPage from "./components/ExperimentsPage";
import StarsSection from "./components/StarsSection";
import Texts from "./components/Texts";
import darkBackgroundImage from "/img/bg-dark.webp";

function App() {
  // VARIABLES
  const [showExperiments, setShowExperiments] = useState(false);
  const [displayMainPage, setDisplayMainPage] = useState(true);

  useEffect(() => {
    if (showExperiments) {
      setDisplayMainPage(false);
    } else {
      setDisplayMainPage(true);
    }
  }, [showExperiments]);

  return (
    <>
      {/* MAIN PAGE */}
      {/* {displayMainPage ? ( */}
      <div className="relative text-white h-dvh w-screen bg-[#242424] flex flex-col justify-between items-start lg:p-24 md:px-20 sm:px-16 px-12 sm:py-24 py-14">
        <Texts setShowExperiments={setShowExperiments} />
        {/* <BubbleGradient /> */}
        <StarsSection />
        <div
          className="absolute top-0 left-0 w-full h-full z-[15] pointer-events-none bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${darkBackgroundImage})` }}
        ></div>
      </div>
      {/* ) : null} */}

      {/* EXPERIMENTS PAGE */}
      {/* <ExperimentsPage
        isVisible={showExperiments}
        setShowExperiments={setShowExperiments}
      /> */}
      <AnimatePresence>
        {showExperiments ? (
          <ExperimentsPage
            // isVisible={showExperiments}
            setShowExperiments={setShowExperiments}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default App;
