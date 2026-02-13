document.addEventListener('click', (e) => {
    const sparkles = ['✨', '💖', '⭐', '🌟'];
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => { sparkle.remove(); }, 500);
});