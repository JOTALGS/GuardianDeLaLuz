import React, { useEffect, useRef, useState } from 'react';
import styles from './LandingLogo.module.css';
import faroLogo from '/logoFaroNegativo.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Logo = () => {
  const logoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    gsap.fromTo(
      logoRef.current,
      { width: "90%" }, // Starting state
      {
        width: "60%", // Ending state
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const MobileSVG = () => (
    <svg 
      width={50} 
      height={50} 
      viewBox="-0.5 0 20 20" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-420.000000, -760.000000)" fill="#efcc00">
          <g transform="translate(56.000000, 160.000000)">
            <path d="M369.277343,604 C369.859711,604 370.332357,603.552 370.332357,603 L370.332357,601 C370.332357,600.448 369.859711,600 369.277343,600 C368.694975,600 368.222329,600.448 368.222329,601 L368.222329,603 C368.222329,603.552 368.694975,604 369.277343,604 M373.296948,614.464 L371.382097,616.147 C371.049767,616.462 370.332357,616.239 370.332357,615.793 L370.332357,610.657 C370.332357,610.104 369.859711,609.657 369.277343,609.657 C368.694975,609.657 368.222329,610.104 368.222329,610.657 L368.222329,615.791 C368.222329,616.237 367.803488,616.46 367.471159,616.145 L365.726165,614.464 C365.314709,614.073 364.707021,614.073 364.29451,614.464 C363.882,614.854 363.912595,615.488 364.325106,615.879 L367.695877,619.059 L368.079902,619.415 C368.903868,620.195 370.245846,620.195 371.068757,619.415 L374.807728,615.878 C375.220239,615.488 375.231844,614.855 374.820389,614.464 C374.407878,614.074 373.709458,614.074 373.296948,614.464 M382.776252,608.36 L378.654311,610.516 C378.23969,610.787 377.679477,610.731 377.323938,610.394 C376.866061,609.96 376.931472,609.223 377.461089,608.87 L378.719722,608 L369.757375,608 C369.175007,608 368.69814,607.586 368.69814,607.033 C368.69814,606.323 369.376514,606.066 369.748935,606.066 L375.061987,606.059 L375.466057,601.741 C375.802607,600.784 376.75001,600.215 377.793419,600.413 L381.53661,600.745 C382.523048,600.932 382.99253,601.753 382.99253,602.706 L382.99253,607.541 C382.99253,607.87 383.062161,608.174 382.776252,608.36"></path>
          </g>
        </g>
      </g>
    </svg>
  );

  // Desktop SVG (first SVG from original code)
  const DesktopSVG = () => (
    <svg 
      width={100} 
      height={100} 
      viewBox="0 0 72 72" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g id="color">
          <path fill="#efcc00" d="M37.2971,16.7728h-2.472c-5.8763,0-10.6842,4.8079-10.6842,10.6842v16.9332 c0,5.8763,4.8079,10.6842,10.6842,10.6842h2.472c5.8763,0,10.6842-4.8079,10.6842-10.6842V27.457 C47.9813,21.5807,43.1734,16.7728,37.2971,16.7728z"></path>
          <path fill="#edf100" d="M36.0611,22.1118L36.0611,22.1118c-1.1405,0-2.0737,0.9332-2.0737,2.0737v5.8343 c0,1.1405,0.9332,2.0737,2.0737,2.0737h0c1.1405,0,2.0737-0.9332,2.0737-2.0737v-5.8343 C38.1348,23.045,37.2016,22.1118,36.0611,22.1118z"></path>
        </g>
        <g id="line">
          <path fill="none" stroke="#504506" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M38.8294,54.5013h-5.5367c-4.9688,0-9.0342-4.0654-9.0342-9.0342V26.38c0-4.9688,4.0654-9.0342,9.0342-9.0342h5.5367 c4.9688,0,9.0342,4.0654,9.0342,9.0342v19.0871C47.8636,50.4359,43.7982,54.5013,38.8294,54.5013z"></path>
          <path fill="none" stroke="#504506" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M36.1449,32.1553h-0.1677c-1.1161,0-2.0294-0.9132-2.0294-2.0294v-6.0465c0-1.1161,0.9132-2.0294,2.0294-2.0294h0.1677 c1.1161,0,2.0294,0.9132,2.0294,2.0294v6.0465C38.1743,31.2421,37.2611,32.1553,36.1449,32.1553z"></path>
        </g>
      </g>
    </svg>
  );

  return (
    <div className={styles.logoContainer}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img ref={logoRef} className={styles.logo} src={faroLogo} alt="Faro logo" />
      </a>
      <div className={styles.scrollButton}>
        <p>¡Desliza para saber más!</p>      
        {isMobile ? <MobileSVG /> : <DesktopSVG />}
      </div>
    </div>
  );
};

export default Logo;
