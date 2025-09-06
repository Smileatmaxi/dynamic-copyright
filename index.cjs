function updateCopyrightYears() {
    var now = new Date().getFullYear();

    document.querySelectorAll('[data-copyright-start]').forEach(function (el) {
        var start = parseInt(el.getAttribute('data-copyright-start'), 10);
        el.textContent = (start && start < now) ? (start + '–' + now) : now;
    });

    var el = document.getElementById('copyYear');
    if (el) el.textContent = now;
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateCopyrightYears);
    } else {
        updateCopyrightYears();
    }
}

module.exports = updateCopyrightYears;
