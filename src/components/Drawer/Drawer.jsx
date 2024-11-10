import React from 'react';
import styles from './Drawer.module.scss';
import { useTranslation } from 'react-i18next';

export default function Drawer({ openBurger }) {
  const { t } = useTranslation();
  React.useEffect(() => {
    if (openBurger) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = '';
    }
  }, [openBurger]);
  return (
    <div className={`${styles.drawer} ${openBurger ? styles.active : ''}`}>
      <img src="./Drawer-logo.png" alt="logo" />
      <div className={styles.drawerLinks}>
        <ul className="flex items-center flex-col w-[50%] h-fit m-auto z-10 gap-4">
          <a href="#menu-link">
            <li>{t('header.links1')}</li>
          </a>
          <a href="#menu-link">
            <li>{t('header.links2')}</li>
          </a>
          <a href="#menu-link">
            <li>{t('header.links3')}</li>
          </a>
          <a href="#menu-link">
            <li>{t('header.links4')}</li>
          </a>
          <a href="#menu-link">
            <li>{t('header.links5')}</li>
          </a>
          <a href="#menu-link">
            <li>{t('header.links6')}</li>
          </a>
        </ul>
      </div>
    </div>
  );
}