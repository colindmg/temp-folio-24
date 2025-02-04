import { useGSAP } from "@gsap/react";
import { easeInOut, easeOut, motion } from "framer-motion";
import gsap from "gsap";
import PropTypes from "prop-types";

gsap.registerPlugin(useGSAP);

const ShowreelPage = ({ setShowShowreel }) => {
  return (
    <motion.div
      key={"showreel-page"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75, ease: easeOut } }}
      exit={{
        opacity: 0,
        transition: { delay: 0.3, duration: 0.5, ease: easeInOut },
      }}
      style={{
        backgroundImage: "url('/img/bg-light.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      className="z-30 h-dvh w-screen fixed top-0 left-0 bg-[#F9F4FA] flex flex-col justify-center items-center gap-10 text-[#141414] font-grotesk"
    >
      <div className="grain absolute top-0 left-0 w-full h-full z-[-1]"></div>

      {/* TITLE */}
      <motion.h1
        key={"showreel-page-title"}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { delay: 0.25, duration: 0.5, ease: easeInOut },
        }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        className="text-3xl relative uppercase font-medium"
      >
        Showreel
      </motion.h1>

      {/* VIDEO */}
      <motion.div
        key={"showreel-video"}
        className="relative"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: easeInOut },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5, ease: easeOut },
        }}
      >
        <iframe
          className="rounded-lg border-2 overflow-hidden border-[#141414] max-w-[90vw] w-[560px] h-[315px] sm:w-[640px] sm:h-[360px] md:w-[800px] md:h-[450px] lg:w-[1000px] lg:h-[563px]"
          src="https://www.youtube.com/embed/BLQHLYOoSv0?si=uj_VqkaWAfvogG0I"
          title="Showreel 2024 - @colindmg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* CLOSE BUTTON */}
      <motion.div
        key={"showreel-close-button"}
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { delay: 0.75, duration: 0.5, ease: easeInOut },
        }}
        exit={{
          opacity: 0,
          filter: "blur(10px)",
          transition: { duration: 0.5, ease: easeOut },
        }}
      >
        <button
          className="group flex relative items-center uppercase tracking-wider text-[#F9F4FA] bg-[#141414] pointer-events-auto rounded-full px-4 py-0.5 pr-10 cursor-pointer"
          onClick={() => {
            setShowShowreel(false);
          }}
        >
          CLOSE{"    "}
          <p className="absolute top-1/2 right-4 -translate-y-1/2 group-hover:rotate-45 transition-all duration-300">
            ✦
          </p>
        </button>
      </motion.div>
    </motion.div>
  );
};

ShowreelPage.propTypes = {
  setShowShowreel: PropTypes.func.isRequired,
};

export default ShowreelPage;
