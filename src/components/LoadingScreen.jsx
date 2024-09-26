import { easeInOut, motion } from "framer-motion";
import PropTypes from "prop-types";

const LoadingScreen = ({ percentage }) => {
  const loadingVariants = {
    initial: { opacity: 0.5 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      key={"loading-screen"}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.75, ease: easeInOut, delay: 0.25 },
      }}
      className="fixed text-white top-0 left-0 w-screen h-screen bg-[#3D3D3D] flex z-[100]"
    >
      {/* PROGRESS BAR & PERCENTAGE*/}
      <p className="fixed bottom-5 lg:right-24 md:right-20 sm:right-16 right-12">
        {percentage}
      </p>
      <motion.div
        key={"loading-bar"}
        className="fixed bottom-0 left-0 w-full h-0.5 bg-white"
        initial={{ width: "0%" }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: easeInOut }}
      ></motion.div>

      {/* STARS & TEXT */}
      <div className="flex flex-col gap-2 absolute top-1/2 -translate-y-1/2 lg:left-24 md:left-20 sm:left-16 left-12">
        <motion.div
          key={"loading-text"}
          variants={loadingVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
            duration: 1,
            ease: "easeInOut",
            delay: 0,
          }}
          className="flex items-center gap-1"
        >
          <p>✦</p>
          <p>@COLINDMG</p>
        </motion.div>

        <motion.div
          key={"loading-text-2"}
          variants={loadingVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
            duration: 1,
            ease: "easeInOut",
            delay: 0.33,
          }}
          className="flex items-center gap-1"
        >
          <p>✶</p>
          <p>CREATIVE</p>
        </motion.div>
        <motion.div
          key={"loading-text-3"}
          variants={loadingVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
            duration: 1,
            ease: "easeInOut",
            delay: 0.66,
          }}
          className="flex items-center gap-1"
        >
          <p>✷</p>
          <p>DEVELOPER</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

LoadingScreen.propTypes = {
  percentage: PropTypes.number,
};

export default LoadingScreen;
