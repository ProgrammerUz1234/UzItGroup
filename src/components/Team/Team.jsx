import React from 'react';
import style from './Team.module.scss';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
export default function Team() {
  const [activeBackground, setActiveBackground] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 2345) {
        setActiveBackground(true);
      }
    });
  }, []);

  const { t } = useTranslation();
  return (
    <section className={style.team}>
      <h2>{t('team.title')}</h2>
      <div className={style.teamWrapper}>
        <div className={style.teamWrapperLeft}>
          <p style={{ whiteSpace: 'pre-line' }}>{t('team.subtitle')}</p>
          <Button width={219} height={52} font={24}>
            {t('team.button')}
          </Button>
        </div>
        <div className={`${style.teamWrapperRight} ${activeBackground ? style.afterClass : ''}`}>
          <img src="./team.jpg" alt="team" />
        </div>
      </div>
    </section>
  );
}
