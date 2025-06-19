document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    h1.addEventListener('click', () => {
        const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#a133ff'];
        const currentColor = h1.style.color;
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        while (newColor === currentColor) {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        }
        h1.style.color = newColor;
    });
});
