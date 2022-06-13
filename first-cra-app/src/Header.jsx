import React from 'react';
import css from './header.module.css';
import img from './img/Group 1.svg';

function Header() {
  return (
    <div className= {css.main_cont}>
    <header className= {css.cont}>
      <div className={css.logo}><img src={img} alt="" /></div>
      <div className={css.header}>
        <div className={css.main}>Главная</div>
        <div className={css.aboutUs}>О нас</div>
        <div className={css.contacts}>Контакты</div>
      </div>
    </header>
    <hr />
  </div>
  );
}

export default Header;
