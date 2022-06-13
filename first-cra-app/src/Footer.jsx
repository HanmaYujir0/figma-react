import React from "react";
import img from './img/Group 6 1.svg';
import css from './footer.module.css'

function Footer() {
  return (
    <footer className= {css.footer}>
      <div className="img"><img src= {img} alt="" /></div>
      <div className= {css.partners}>Партнерам</div>
      <div className={css.developers}>Разработчикам</div>
      <div className={css.vacancies}>Вакансии</div>
      <div className= {css.intocode}>ООО “интукод”, 2020г.</div>
    </footer>
  )
}

export default Footer