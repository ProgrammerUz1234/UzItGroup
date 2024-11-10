import React from 'react';
import style from './MainPage.module.scss';

import Sphere from '../Nova/Sphere';
import { TweenMax } from 'gsap/gsap-core';
import gsap from 'gsap';
import Button from '../Button/Button';
import Sphere2 from '../Sphere2/Sphere2';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t } = useTranslation();
  return (
    <div className={style.mainPage}>
      <div className="w-[60%] z-10">
        {' '}
        <h1 className={style.title}>
          {' '}
          <div className={style.mainTitle}><span>UZ</span> <div>IT</div> </div> <p>GROUP</p>{' '}
        </h1>
        <p className={style.subtitle}>{t('main.main-text')}</p>
        <div className="mt-[50px]">
          {/* <Button width={280} height={71} font={25}>
            Подробнее
          </Button> */}
          <Button width={291} height={71} font={25}>
            {t('main.button')}
          </Button>
        </div>
      </div>
      <Sphere />
      {/* <Sphere2 /> */}
    </div>
  );
}