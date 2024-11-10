import React from 'react';
import style from './Goals.module.scss';
import { useTranslation } from 'react-i18next';

export default function Goals() {
  const { t } = useTranslation();
  return (
    <section className={style.goals}>
      <h2>{t('goals.title')}</h2>
      <div className={style.goalsLine}>
        <div className={style.goalsItem}>
          <p style={{ whiteSpace: 'pre-line' }}>{t('goals.subtitle1')}</p>
        </div>
        <div className={style.goalsItem}>
        <p style={{ whiteSpace: 'pre-line' }}>{t('goals.subtitle2')}</p>
        </div>
        <div className={style.goalsItem}>
        <p style={{ whiteSpace: 'pre-line' }}>{t('goals.subtitle3')}</p>
        </div>
        <div className={style.goalsItem}>
        <p style={{ whiteSpace: 'pre-line' }}>{t('goals.subtitle4')}</p>
        </div>
      </div>
    </section>
  );
}
