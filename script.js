// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme based on the provided string ('dark' or 'light')
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleBtn.textContent = 'Light Mode ☀️';
        } else {
            body.classList.remove('dark-mode');
            themeToggleBtn.textContent = 'Dark Mode 🌙';
        }
    }

    // Check for a saved theme in localStorage and apply it on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    // Event listener for the theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        
        // If it's currently dark, switch to light. Otherwise, switch to dark.
        if (isDarkMode) {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    });

});