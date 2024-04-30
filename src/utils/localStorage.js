const getLocalTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme;
  }
  return "light";
};

const setLocalTheme = () => {
  const storedTheme = getLocalTheme();
  if (storedTheme === "light") {
    localStorage.setItem("theme", "dark");
  } else if (storedTheme === "dark") {
    localStorage.setItem("theme", "light");
  }
};

export { getLocalTheme, setLocalTheme };
