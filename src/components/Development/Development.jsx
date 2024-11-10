import React from 'react';
import styles from './Development.module.scss';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

export default function Development() {
  const { t } = useTranslation();
  return (
    <section className={styles.development}>
      <h2 className="text-[25px] font-bold text-center lg:text-[80px] md:text-[60px] sm:text-[30px]">
        {t('development.title')}
      </h2>
      <div className={styles.developmentWrapper}>
        <div className="w-fit">
          <h3 className="text-[18px] font-bold whitespace-pre-line">
            {t('development.description1')}
          </h3>
          <img className="mt-[25px]" src="./development.png" alt="development" />
          <div className="ml-[50%] translate-x-[-50%] mt-[25px]">
            <Button width={219} height={52} font={25}>
              {t('development.button')}
            </Button>
          </div>
        </div>
        <div className="w-fit">
          <img src="./development2.png " alt="development" />
          <h3 className="text-[18px] font-bold mt-[25px] whitespace-pre-line">
            {t('development.description2')}
          </h3>
          <div className="ml-[50%] translate-x-[-50%] mt-[25px]">
            <Button width={219} height={52} font={25}>
              {t('development.button2')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}