import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [helloClassName, setHelloClassName] = useState(
    "animate__animated animate__zoomInUp"
  );

  const [showVideo, setShowVideo] = useState(false);
  const [showClickMe, setShowClickMe] = useState(false);
  const [timeoutCallback, setTimeoutCallback] = useState(null);

  useEffect(() => {
    var timeoutCallbackTemp = setTimeout(() => setShowClickMe(true), 5000);
    setTimeoutCallback(timeoutCallbackTemp);
  }, []);

  const handleHelloClick = () => {
    setHelloClassName("animate__animated animate__bounceOutRight");
    clearTimeout(timeoutCallback);
    setTimeout(() => {
      setShowVideo(true);
      openFullscreen();
    }, 1000);
  };

  function openFullscreen() {
    var elem = document.getElementById("video");

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div
        className={helloClassName}
        style={{
          fontFamily: "Sofia, cursive",
          color: "white",
          fontSize: "xxx-large",
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={handleHelloClick}
      >
        <>Hello. {showClickMe && <div>Click me.</div>}</>
      </div>
      {showVideo && (
        <iframe
          id="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9jHwwJgSTR4?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
}

export default App;
