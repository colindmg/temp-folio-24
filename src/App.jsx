import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ExperimentsPage from "./components/ExperimentsPage";
import LoadingScreen from "./components/LoadingScreen";
import ShowreelPage from "./components/ShowreelPage";
import StarsSection from "./components/StarsSection";
import Texts from "./components/Texts";
import darkBackgroundImage from "/img/bg-dark.webp";

const filesToLoad = [
  "/img/bg-dark.webp",
  "/img/bg-light.webp",
  "/img/noise.webp",
  "/img/4b-star.webp",
  "/img/6b-star.webp",
  "/img/8b-star.webp",
  "/sounds/open.wav",
  "/sounds/close.wav",
  "/videos/compil2.mp4",
];

function App() {
  // VARIABLES
  const [showExperiments, setShowExperiments] = useState(false);
  const [showShowreel, setShowShowreel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    let loadedFiles = 0;
    const totalFiles = filesToLoad.length;

    const updateProgress = () => {
      loadedFiles += 1;
      const percentage = Math.round((loadedFiles / totalFiles) * 100);
      setLoadingPercentage(percentage);
      if (loadedFiles === totalFiles) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    const loadFile = (file) => {
      return new Promise((resolve) => {
        if (file.endsWith(".webp") || file.endsWith(".png")) {
          const img = new Image();
          img.src = file;
          img.onload = () => {
            updateProgress();
            resolve();
          };
          img.onerror = () => {
            console.error(`Erreur lors du chargement de l'image ${file}`);
            updateProgress();
            resolve(); // Résoudre malgré l'erreur pour ne pas bloquer
          };
        } else if (file.endsWith(".wav") || file.endsWith(".mp3")) {
          if (window.innerWidth > 600) {
            const audio = new Audio();
            audio.src = file;
            audio.oncanplaythrough = () => {
              updateProgress();
              resolve();
            };
            audio.onerror = () => {
              console.error(`Erreur lors du chargement du son ${file}`);
              updateProgress();
              resolve(); // Résoudre malgré l'erreur pour ne pas bloquer
            };
          } else {
            updateProgress();
            resolve();
          }
        } else if (file.endsWith(".mp4")) {
          const video = document.createElement("video");
          video.oncanplaythrough = () => {
            updateProgress();
            resolve();
          };
          video.setAttribute("muted", "");
          video.setAttribute("playsinline", "");
          video.src = file;
          video.load();
        } else {
          // Type de fichier non supporté
          updateProgress();
          resolve();
        }
      });
    };

    // Charger chaque fichier et mettre à jour le pourcentage
    filesToLoad.forEach((file) => {
      loadFile(file).catch((err) => {
        console.error("Erreur lors du chargement du fichier:", file, err);
        updateProgress();
      });
    });
  }, []);

  return (
    <>
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {loading ? <LoadingScreen percentage={loadingPercentage} /> : null}
      </AnimatePresence>

      {/* MAIN PAGE */}
      <AnimatePresence>
        {!loading ? (
          <div className="relative text-white h-dvh w-screen bg-[#242424] flex flex-col justify-between items-start lg:p-24 md:px-20 sm:px-16 px-12 sm:py-24 py-14">
            <Texts
              setShowExperiments={setShowExperiments}
              setShowShowreel={setShowShowreel}
            />
            <StarsSection />

            {/* GRAINY BACKGROUND */}
            <div className="grain absolute top-0 left-0 w-full h-full z-[16]"></div>

            {/* IMAGE DE BACKGROUND */}
            <div
              className="absolute top-0 left-0 w-full h-full z-[15] pointer-events-none bg-fixed bg-cover bg-center"
              style={{ backgroundImage: `url(${darkBackgroundImage})` }}
            ></div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* EXPERIMENTS & SHOWREEL PAGE */}
      <AnimatePresence>
        {showExperiments ? (
          <ExperimentsPage setShowExperiments={setShowExperiments} />
        ) : null}

        {showShowreel ? (
          <ShowreelPage setShowShowreel={setShowShowreel} />
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default App;
