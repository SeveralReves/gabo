import React, { useRef, useEffect } from "react";
// import videoSrc from "../assets/video.mp4";
// import videoBG from "../assets/video-1.mp4";

const VideoPlayer = ({videoSrc}) => {
    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;
  
      const handleTimeUpdate = () => {
        const { currentTime, duration } = video;
  
        // Define un margen de tiempo al final
        const margin = 1;
  
        // Si está cerca del final, establece la posición al principio
        if (currentTime > duration - margin) {
          video.currentTime = 0;
        }
      };
  
      // Agrega el evento 'timeupdate' para detectar cambios en el tiempo del video
      video.addEventListener("timeupdate", handleTimeUpdate);
  
      // Limpia el evento cuando el componente se desmonta
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }, []);


  return (
    <div>
      <video ref={videoRef} autoPlay loop muted className="hero__image" >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoPlayer;
