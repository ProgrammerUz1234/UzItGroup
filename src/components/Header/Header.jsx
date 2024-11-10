import React from 'react';
import style from './Header.module.scss';
import HeaderRightSide from './HeaderRightSide';
import HeaderLeftSide from './HeaderLeftSide';
import HeaderCenter from './HeaderCenter';
import ToggleTheme from './ToggleTheme';
import Drawer from '../Drawer/Drawer';
import BurgerIcon from '../Burger/BurgerIcon';
import { ThemeProviderCTX } from '../../context/ThemeCTX';

export default function Header({ openBurger, setOpenBurger }) {
  const { theme, setTheme } = React.useContext(ThemeProviderCTX);
  console.log(theme);

  return (
    <header className={style.header}>
      <Drawer openBurger={openBurger} />
      {/* Header left side */}
      <HeaderLeftSide />
      {/* Header center */}
      <HeaderCenter />
      {/* Header right side */}
      <HeaderRightSide />
      <BurgerIcon openBurger={openBurger} setOpenBurger={setOpenBurger} />
    </header>
  );
}