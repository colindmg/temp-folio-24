import { easeOut, motion } from "framer-motion";
import FirstStar from "/img/4b-star.webp";
import SecondStar from "/img/6b-star.webp";
import ThirdStar from "/img/8b-star.webp";

const StarsSection = () => {
  return (
    <div className="flex items-center justify-center absolute z-[17] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.img
        key={"FirstStar"}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 0.5, ease: easeOut },
        }}
        src={FirstStar}
        alt="First Star"
        className="h-40 max-sm:h-32"
        style={{
          animation: "spin2 20s linear infinite",
        }}
      />
      <motion.img
        key={"SecondStar"}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 0.7, ease: easeOut },
        }}
        src={SecondStar}
        alt="Second Star"
        className="h-40 max-sm:h-32"
        style={{
          animation: "spin 25s linear infinite",
        }}
      />
      <motion.img
        key={"ThirdStar"}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 0.9, ease: easeOut },
        }}
        src={ThirdStar}
        alt="Third Star"
        className="h-40 max-sm:h-32"
        style={{
          animation: "spin2 30s linear infinite",
        }}
      />
    </div>
  );
};

export default StarsSection;
