const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    btn.textContent = 'Всё ещё красивая кнопка!';
    alert(`Ваш экран имеет размеры: ${window.screen.width}x${window.screen.height} пикселей`);
})
