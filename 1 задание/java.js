const btn = document.querySelector('.btn');
const firstIcon = document.querySelector('.first-icon');
const secondIcon = document.querySelector('.second-icon');
btn.addEventListener('click', () => {
    if (firstIcon.style.display === "none") {
        firstIcon.style.display = "block";
        secondIcon.style.display = "none";
    } else {
        firstIcon.style.display = "none";
        secondIcon.style.display = "block";
    }
})