export default function updateCopyrightYears() {
    const now = new Date().getFullYear();

    document.querySelectorAll('[data-copyright-start]').forEach((el) => {
        const start = parseInt(el.getAttribute('data-copyright-start'), 10);
        el.textContent = (start && start < now) ? (start + '–' + now) : now;
    });

    const el = document.getElementById('copyYear');
    if (el) el.textContent = now;
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => updateCopyrightYears());
    } else {
        updateCopyrightYears();
    }
}

