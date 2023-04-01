const scrollTo = (id, position) => {
  const element = document.getElementById(id);
  window.scrollTo({
    top: element?.getBoundingClientRect()[position],
    left: 0,
    behavior: "smooth",
  });
};

export default scrollTo;