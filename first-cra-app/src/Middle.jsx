import React from "react";
import css from './middle.module.css'

function Middle() {
  return (
    <div className= {css.middle_cont} >
      <div className={css.counter}>0</div>
      <div className={css.operations}>
        <button className= {css.increase}>Увеличить</button>
        <button className={css.decrease}>Уменьшить</button>
        <button className={css.reset} >Сбросить</button>
      </div>
    </div>
  )
}

export default Middle