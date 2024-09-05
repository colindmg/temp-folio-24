import FirstStar from "/img/4b-star.webp";
import SecondStar from "/img/6b-star.webp";
import ThirdStar from "/img/8b-star.webp";

const StarsSection = () => {
  return (
    <div className="flex items-center justify-center absolute z-[16] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img
        src={FirstStar}
        alt="First Star"
        className="h-40 max-sm:h-32"
        style={{
          animation: "spin2 20s linear infinite",
        }}
      />
      <img
        src={SecondStar}
        alt="Second Star"
        className="h-40 max-sm:h-32"
        style={{
          animation: "spin 25s linear infinite",
        }}
      />
      <img
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
