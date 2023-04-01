import Logo from "@assets/images/logo.svg";
import Login from "@assets/images/login.svg";

const data = [
  { type: "img", src: Logo, alt: "logo", className: "root__logo" },
  { type: "link", href: "https://machinarium.kz/o-kompanii", text: "О компании" },
  { type: "link", href: "https://machinarium.kz/oplata-i-dostavka", text: "Оплата и доставка" },
  { type: "link", href: "https://machinarium.kz/kontakty", text: "Контакты" },
  { type: "link", href: "https://machinarium.kz/magazin/folder/stroitelnaya-spectehnika", text: "Погрузчики" },
  { type: "link", href: "https://machinarium.kz/magazin/folder/kommunalnye-avtomobili", text: "Комунальные автомобили" },
  { type: "img", src: Login, alt: "Login", className: "root__login", href: 'https://machinarium.kz/registraciya'},
];

export default data;
