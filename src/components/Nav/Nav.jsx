import React from "react";

import cn from "classnames";
import data from "./common/data";

import s from "./Nav.module.scss";

const Nav = () => {
  const renderList = () => {
    return data.map(({ type, src, alt, href, text, className }) => {
      if (type === "link") {
        return (
          <li key={text} className={s.root__link_text}>
            <a className={s.root__link} href={href}>
              {text}
            </a>
          </li>
        );
      }
      if (type === "img") {
        if (href) {
          return (
            <li key={alt}>
              <a className={s.root__link} href={href}>
                <img src={src} alt={alt} className={s[className]} />
              </a>
            </li>
          );
        }
        return (
          <li key={alt}>
            <img src={src} alt={alt} className={s[className]} />
          </li>
        );
      }
    });
  };

  return (
    <nav className={cn(s.root, s.root__wrapper)}>
      <div className={s.root__content}>
        <ul className={s.root__list}>{renderList()}</ul>
      </div>
    </nav>
  );
};

export default Nav;
