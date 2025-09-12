export default function updateCopyrightYears(options = {}) {
    const now = new Date().getFullYear();

    const {
        selector = "[data-copyright-start] #copyYear",
        startingYearAttribute= "data-copyright-start",
        separator = "-",
        prefix = "",
        suffix= ""
    } = options;

    document.querySelectorAll(selector).forEach((el) => {
        let yearText = "";
        let start = el.getAttribute(startingYearAttribute);

        if (start) {
            start = parseInt(start, 10);
            yearText = (start && start < now) ? `${start}${separator}${now}` : `${now}`;
        } else {
            yearText = `${now}`;
        }

        el.textContent = `${prefix}${yearText}${suffix}`;
    });
}

    //Auto-run in Browser
if (typeof window !== "undefined" && typeof document !== "undefined") {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => updateCopyrightYears());
    } else {
        updateCopyrightYears();
    }
}

