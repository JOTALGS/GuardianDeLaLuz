import React, { useEffect, useRef } from 'react';
import styles from './LandingVideo.module.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.to(videoRef.current, {
      width: "85%",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top bottom",
        end: "bottom 80%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video ref={videoRef} src="/mochilas_com.mp4" controls></video>
    </div>
  );
};

export default Video;