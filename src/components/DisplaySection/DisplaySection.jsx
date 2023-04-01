import React from "react";
import cn from "classnames";

import s from "./DisplaySection.module.scss";

const DisplaySection = () => {
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={cn(s.root, s.root__wrapper)} id="displaySection">
      <h2 className={s.root__title}>Лучшая цена</h2>
      <p className={s.root__text}>Качество</p>
      <span className={s.root__description}>Спецтехники</span>
      <a className={s.root__button} href="https://machinarium.kz/">Перейти</a>
      <button className={s.root__button_back} onClick={toTop}>
        Вернуться
      </button>
    </div>
  );
};

export default DisplaySection;
