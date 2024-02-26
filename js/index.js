"use strict";

const template = document.createElement("template");
const htmlTag = document.querySelector("html");
(function () {
  // Then set the 'data-theme' attribute to whatever is in localstorage
  htmlTag.setAttribute("data-theme", localStorage.getItem("theme"));
})();

/**
 * @param { localStorageTheme: String | null, systemSettingDark: String} - localStorageTheme, systemSettingDark
 * @returns String - dark | light
 */
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) return localStorageTheme;
  return systemSettingDark.matches ? "dark" : "light";
}
/**
 * dark/light mode toggle
 */
function themeToggle() {
  const lightSwitch = document.querySelector("[data-theme-toggle]");
  lightSwitch.addEventListener("click", () => {
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    let currentThemeSetting = calculateSettingAsThemeString({
      localStorageTheme,
      systemSettingDark,
    });
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    const innerText = newTheme === "dark" ? "💡" : "🌞";
    lightSwitch.innerText = innerText;

    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    currentThemeSetting = newTheme;
  });
}
function highlightNav() {
  const navItems = document.getElementsByClassName("nav_item");
  Array.from(navItems).forEach((item) => {
    const href = item.childNodes[1].getAttribute("href");
    if ("/" + href === window.location.pathname) {
      item.classList.add("active");
    }
  });
}

highlightNav();
// themeToggle();

const hello = () => console.log("hello");
export { hello, highlightNav };
