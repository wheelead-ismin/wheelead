/**
 * Theming.
 *
 * Supports the preferred color scheme of the browser as well as
 * the theme choice of the user.
 *
 */

// Sets which element is the theme toggle element
const themeToggle = document.querySelector(".theme-toggle");

// Check for local theme setting
chosenTheme = window.localStorage && window.localStorage.getItem("theme");
const lastDefaultTheme = window.localStorage && window.localStorage.getItem("last-default-theme");

// If no local theme setting, set sameAsBrowser as default
if (!chosenTheme) {
    localStorage.setItem("theme", "sameAsBrowser");
    chosenTheme = window.localStorage && window.localStorage.getItem("theme");
}

// If actual browser default is different than last time, then use browser default
if (window.matchMedia("(prefers-color-scheme: dark)").matches && lastDefaultTheme == "light"
    ||
    window.matchMedia("(prefers-color-scheme: light)").matches && lastDefaultTheme == "dark") {
    localStorage.setItem("theme", "sameAsBrowser");
    chosenTheme = window.localStorage && window.localStorage.getItem("theme");
}

// Sets browser default to cookies for next time
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("last-default-theme", "dark");
} else {
    localStorage.setItem("last-default-theme", "light");
}

const chosenThemeIsSameAsBrowser = (chosenTheme == "sameAsBrowser");
const chosenThemeIsInverted = (chosenTheme == "inverted");

// If there is a theme toggle, add listeners and update according to local theme setting
if (themeToggle) {
    // Listener to invert theme on toggle
    themeToggle.addEventListener("click", switchTheme, false);
    // Listeners to overwrite local data on browser theme preference change
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => e.matches && setSameAsBrowser());
    window
        .matchMedia("(prefers-color-scheme: light)")
        .addEventListener("change", (e) => e.matches && setSameAsBrowser());

    updatePageData();
}

function setSameAsBrowser() {
    localStorage.setItem("theme", "sameAsBrowser");
    updatePageData();
    window.location.reload();
}

// Update the page
function updatePageData() {
    if (chosenThemeIsSameAsBrowser) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }
}

// Switch the theme
function switchTheme() {
    if (chosenThemeIsSameAsBrowser) {
        localStorage.setItem("theme", "inverted");
    } else {
        localStorage.setItem("theme", "sameAsBrowser");
    }

    updatePageData();
    window.location.reload();
}
