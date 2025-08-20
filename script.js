// 3D Tilt Effect
const card = document.getElementById('glass-card');
if (window.matchMedia("(min-width: 769px)").matches) {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        // card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
}

// --- THEME SWITCHER ---
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
const icon = themeToggle.querySelector('i');

// Function to set the theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Initialize theme
if (currentTheme) {
    setTheme(currentTheme);
} else {
    setTheme('dark'); // Default to dark mode
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});