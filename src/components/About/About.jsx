import React from 'react';
import style from './About.module.scss';
import { useTranslation } from 'react-i18next';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const { t } = useTranslation();
  const imgRef = React.useRef(null);
  // React.useEffect(() => {
  //   const element = imgRef.current;
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(element, {
  //     x: 700,
  //     duration: 2,
  //     scrollTrigger: element,
  //   });
  // }, []);

  return (
    <section className={style.about}>
      <div className={style.aboutLeft}>
        <div className="w-[50%]">
          <img data-aos="fade-right" src="./about-left.png" alt="about-left" />
        </div>

        <div>
          <h2>{t('about.title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('about.subtitle')}</p>
        </div>
      </div>

      <div className={style.aboutRight}>
        <div>
          <h2>{t('directors.title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('directors.subtitle')}</p>
        </div>
        <img data-aos="fade-left" src="./about-right.png" alt="картинка про нас. но видимо она не прогрузилась. соре" />
      </div>
    </section>
  );
}
