import React, { useEffect, useRef } from 'react';
import styles from './LandingHistorias.module.css'
import precapture1 from '/precapture1.png'
import precapture2 from '/precapture2.png'
import precapture3 from '/precapture3.png'
import precapture4 from '/precapture4.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Historias = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);

  useEffect(() => {
      gsap.fromTo(imageRef1.current, 
        { x: "20%" }, 
        {
          x: "0%",
          scrollTrigger: {
            trigger: imageRef1.current,
            start: "top bottom",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(imageRef2.current, 
        { x: "-20%" }, 
        {
          x: "0%",
          scrollTrigger: {
            trigger: imageRef2.current,
            start: "top bottom",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(imageRef3.current, 
        { x: "20%" }, 
        {
          x: "0%",
          scrollTrigger: {
            trigger: imageRef3.current,
            start: "top bottom",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(imageRef4.current, 
        { x: "-20%" }, 
        {
          x: "0%",
          scrollTrigger: {
            trigger: imageRef4.current,
            start: "top bottom",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
  }, []);

  return (
    <div className={styles.storiesContainer}>
      <div className={styles.stories}>
        <h1>Historias de: <span>EL GUARDÍAN DE LA LUZ</span></h1>
        <h2>Recorrido multimedia por Punta Brava</h2>
        <div className={styles.storyItem}>
          <p>
            El <span className={styles.highlight}>Guardían de la luz</span> es un recorrido interactivo y narrativo
            ambientado en el <span className={styles.highlight}>faro de Punta Carretas</span>,
            que combina historia, leyendas marítimas y tecnología. El anfitrión, Diego Antonio Sánchez, el último
            de un linaje de fareros, y su "tío fantasma" Manuel José Teixeira Carvalho, guían a los visitantes en
            sta experiencia inmersiva.
          </p>
          <img ref={imageRef1} src={precapture3} alt="Faro de Punta Carretas" />
        </div>
        <div className={styles.storyItem}>
          <img ref={imageRef2} src={precapture2} alt="Faro de Punta Carretas" />
          <p>
            La narrativa comienza con historias sobre naufragios, corsarios y la evolución de los faros como hitos de
            navegación. Se exploran las <span className={styles.highlight}>tradiciones familiares de los fareros</span> y los avances tecnológicos representados
            por una aplicación que enriquece la experiencia con información adicional. A lo largo del recorrido, se
            introducen temas históricos como el <span className={styles.highlight}>origen del nombre Montevideo</span>,
            la <span className={styles.highlight}>conquista del Río de la Plata</span>, y
            leyendas de islas fantasma y piratas.
          </p>
        </div>
        <div className={styles.storyItem}>
          <p>
            El "tío fantasma" aporta un elemento <span className={styles.highlight}>mágico y teatral</span>, narrando su propia historia como marinero portugués
            y conectando con episodios clave como la <span className={styles.highlight}>fundación de Montevideo</span> y el descubrimiento de tesoros naufragados.
            También se relatan acontecimientos históricos del siglo XX, como el hundimiento del Admiral Graf Spee durante
            la <span className={styles.highlight}>Segunda Guerra Mundial</span> y la <span className={styles.highlight}>Crisis de febrero de 1973 en Uruguay</span>.
          </p>
          <img ref={imageRef3} src={precapture1} alt="Faro de Punta Carretas" />
        </div>
        <div className={styles.storyItem}>
          <img ref={imageRef4} src={precapture4} alt="Faro de Punta Carretas" />
            <p>
              El guion combina elementos <span className={styles.highlight}>históricos, culturales y humorísticos</span>, utilizando juegos y narrativas visuales para
              <span className={styles.highlight}> involucrar a los visitantes</span>.
              <br />
              Es un paseo que destaca por su riqueza narrativa, su enfoque en la <span className={styles.highlight}>interacción con el público</span> y el uso creativo
              de la historia para ofrecer una <span className={styles.highlight}>experiencia educativa y entretenida</span>.
            </p>
        </div>
      </div>

    </div>
  );
};

export default Historias;