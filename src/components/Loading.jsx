import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import {WaitText} from "../style";



const Loader = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    TweenMax.fromTo([first.current, third.current], 0.5, { y: -20 }, { y: 0, yoyo: true, repeat: -1 });
    TweenMax.fromTo([second.current, fourth.current], 0.5, { y: 0 }, { y: -20, yoyo: true, repeat: -1 });
  }, []);

  return (
    <div className="loader-container">
      <svg viewBox="0 0 150 33.2" width="180" height="150">
        <circle ref={first} cx="16.1" cy="16.6" r="16.1" fill="#e8964a" />
        <circle ref={second} cx="55.2" cy="16.6" r="16.1" fill="#ecb847" />
        <circle ref={third} cx="94.3" cy="16.6" r="16.1" fill="#e8964a" />
        <circle ref={fourth} cx="133.4" cy="16.6" r="16.1" fill="#ecb847" />
      </svg>
      <WaitText>Please Wait...</WaitText>
    </div>
  );
};

export default Loader;