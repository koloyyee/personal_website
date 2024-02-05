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


const hello = () => { alert("Hello");}

export {hello}