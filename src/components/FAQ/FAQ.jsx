import React from 'react';
import styles from './FAQ.module.scss';
import Accordion from './Accordions';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <section className={styles.faq}>
      <div className={styles.faqWrapper}>
        <h2 className="text-[90px] font-bold mt-[70px]">{t('FAQ.title')}</h2>
        <Accordion
          title={t('FAQ.mainTitle1')}
          answer={t('FAQ.answer1')}
        />
        <Accordion
      title={t('FAQ.mainTitle2')}
      answer={t('FAQ.answer2')}
        />
        <Accordion
   title={t('FAQ.mainTitle3')}
   answer={t('FAQ.answer3')}
        />
        <Accordion
   title={t('FAQ.mainTitle4')}
   answer={t('FAQ.answer4')}
        />
      </div>
    </section>
  );
}