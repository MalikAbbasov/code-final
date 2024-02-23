import React, { useEffect, useState } from "react";
import "./animation.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

function Animationsection() {

  const [countOn, setCountOn] = useState(false)


  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div>
       <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)} >
      <div id="animationsection">
        <div className="container">
          <div className="infos">
            <div data-aos="fade-up-right" className="info">
              <h3>
              {countOn && <CountUp start={0} end={100} delay={0.2} duration={2.5} />}+
                xəbər
                <div className="line"></div>
              </h3>
              <p>
                Bütün siyasi, iqtisadi, bank, ölkə, dünya, dövlət və s.
                xəbərləri Natiqoğlu saytında!
              </p>
            </div>
            <div data-aos="fade-up-right" className="info">
              <h3>
              {countOn && <CountUp start={0} end={325} delay={0.2} duration={2.5} />}+ abonə
                <div className="line"></div>
              </h3>

              <p>
                Sənə uyğun olan bütün xəbərləri Natiqoğlu-da tapa bilərsən!
              </p>
            </div>
            <div data-aos="fade-up-right" className="info">
              <h3>
                Sürətli və etibarlı
                <div className="line"></div>
              </h3>
              <p>
                Natiqoğlu ilə bütün yeni, vacib, aktual və deqiq xəbərlər üçün bizi izləmədə qalın!
              </p>
            </div>
          </div>
        </div>
      </div>
      </ScrollTrigger>
    </div>
  );
}

export default Animationsection;
