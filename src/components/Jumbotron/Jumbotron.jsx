import React from "react";
import cn from "classnames";
import scrollTo from "@helpers/scrollTo";

import s from "./Jumbotron.module.scss";

const Jumbotron = () => {
  const learMore = () => {
    scrollTo("soundSection", "top");
  };

  return (
    <div className={cn(s.root, s.root__wrapper)} id="jumbotronSection">
      <h2 className={s.root__title}>Спецтехника </h2>
      <h2 className={s.root__subtitle}>Высочайшего качества </h2>
      <p className={s.root__text}>От самых надежных</p>
      <span className={s.root__description}>производителей со всего мира</span>
      <ul className={s.root__links}>
        <li>
          <a href="https://machinarium.kz/magazin/folder/stroitelnaya-spectehnika">
            <button className={s.root__links_button}>Купить</button>
          </a>
        </li>
        <li>
          <a className={s.root__links_link} onClick={learMore}>
            Узнать больше
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Jumbotron;
