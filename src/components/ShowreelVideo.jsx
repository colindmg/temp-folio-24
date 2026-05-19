import { useEffect, useRef, useState } from "react";

const ShowreelVideo = () => {
  const [canPlay, setCanPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasBeenPlayed, setHasBeenPlayed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);

  const handleCanPlay = () => {
    setCanPlay(true);
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
    }
  };

  const togglePlay = () => {
    if (!canPlay) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);

    if (!hasBeenPlayed) {
      setHasBeenPlayed(true);
    }
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (wrapperRef.current.requestFullscreen) {
        wrapperRef.current.requestFullscreen();
      } else if (wrapperRef.current.mozRequestFullScreen) {
        wrapperRef.current.mozRequestFullScreen();
      } else if (wrapperRef.current.webkitRequestFullscreen) {
        wrapperRef.current.webkitRequestFullscreen();
      } else if (wrapperRef.current.msRequestFullscreen) {
        wrapperRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isFullScreenNow =
        document.fullscreenElement === wrapperRef.current ||
        document.mozFullScreenElement === wrapperRef.current ||
        document.webkitFullscreenElement === wrapperRef.current ||
        document.msFullscreenElement === wrapperRef.current;
      setIsFullScreen(isFullScreenNow);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-auto aspect-video bg-[#0A0A0A]"
    >
      <video
        ref={videoRef}
        src="./videos/showreel.mp4"
        loop
        className="w-full h-full object-contain"
        onCanPlay={handleCanPlay}
        onLoadedData={handleCanPlay}
        onLoadedMetadata={handleCanPlay}
      ></video>
      <div
        className={`overlay absolute inset-0  text-[#FAFAFA] p-3 flex flex-col justify-end ${isPlaying || hasBeenPlayed ? "bg-transparent" : "bg-[#0A0A0A]"}`}
      >
        {/* LOGO */}
        {!isPlaying && !hasBeenPlayed && (
          <svg
            fill="none"
            viewBox="0 0 104 43"
            className="w-1/6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <path
              fill="currentColor"
              d="M52 0c28.72 0 52 9.42 52 21.05 0 11.62-23.28 21.05-52 21.05S0 32.67 0 21.05 23.28 0 52 0m0 2.77c-25.74 0-46.6 8.15-46.6 18.21S26.26 39.19 52 39.19s46.6-8.15 46.6-18.2C98.6 10.91 77.74 2.76 52 2.76"
            />
            <path
              fill="currentColor"
              d="m81.08 6.72 1.82 10.02 8.22-5.66-5.66 8.22 13.14 1.54-13.14 2.1 5.66 8.22-8.22-5.66-1.82 9.67-1.81-9.67-7.74 5.66 5.17-8.23-19.37-2.09L76.7 19.3l-5.17-8.22 7.74 5.66z"
            />
            <path
              fill="currentColor"
              d="m52 2.77 2.64 13.5L77.97 5.82l-20.7 15.02 20.7 15.3-23.33-10.73L52 39.2l-2.64-13.78-23.32 10.73 20.68-15.3L26.04 5.82l23.32 10.45z"
            />
            <path
              fill="currentColor"
              d="m24.1 6.37 2.57 11.97 20 2.57-20 2.57L24.1 35.6l-2.58-12.1L5.4 20.9l16.12-2.57z"
            />
          </svg>
        )}

        {canPlay && (
          <div className="flex w-full justify-between gap-2 leading-4 text-sm mix-blend-difference">
            <button onClick={togglePlay}>{isPlaying ? "PAUSE" : "PLAY"}</button>
            <button onClick={toggleFullScreen}>
              {isFullScreen ? "EXIT" : "FULLSCREEN"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowreelVideo;
