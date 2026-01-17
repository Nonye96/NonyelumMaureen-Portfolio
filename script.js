alert("Welcome to my portfolio website, Nonyelum");

const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Light Mode';
    } else {
        toggleBtn.textContent = 'Dark Mode';
    }
});