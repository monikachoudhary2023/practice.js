function toggleDarkMode() {
    const body = document.body;
    const button = document.querySelector('.toggle-button');

    // Toggle between dark mode and light mode
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = 'Switch to Dark Mode';
    }
}