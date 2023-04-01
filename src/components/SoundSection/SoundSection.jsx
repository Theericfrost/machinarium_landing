import React from "react";
import cn from "classnames";
import scrollTo from "@helpers/scrollTo";

import s from "./SoundSection.module.scss";

const SoundSection = () => {
  const learMore = () => {
    scrollTo("displaySection", "bottom");
  };

  return (
    <div className={cn(s.root, s.root__wrapper)} id="soundSection">
      <div className={s.root__body}>
        <div className={s.root__content}>
          <h2 className={s.root__content_title}>Надежная и Быстрая</h2>
          <p className={s.root__content_text}>Сертифицированная</p>
          <p className={s.root__content_description}>
            техника для работы в экстремальных условиях
          </p>
          <ul className={s.root__content_links}>
            <li>
              <button className={s.root__content_button}>Купить</button>
            </li>
            <li>
              <a className={s.root__content_link} onClick={learMore}>
                Узнать больше
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
