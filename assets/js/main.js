$(document).ready(function () {
    const toggleBtn = document.getElementById('theme-toggle');
    const root = document.body; // 🔁 changed from document.documentElement

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }

    updateButtonIcon();

    toggleBtn.addEventListener('click', () => {
        root.classList.toggle('dark');
        const isDark = root.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateButtonIcon();
    });

    function updateButtonIcon() {
        const icon = toggleBtn.querySelector('i');
        icon.className = root.classList.contains('dark') ? 'bx bx-moon' : 'bx bx-sun';
    }
});
