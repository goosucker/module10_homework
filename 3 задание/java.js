const url = "wss://echo-ws-service.herokuapp.com";
const inp = document.querySelector('.chat-inp')
const board = document.querySelector('.chat-board');
const sendBtn = document.querySelector('.send');
const geoBtn = document.querySelector('.geo');
const warning = document.querySelector(".warning");
let websocket = new WebSocket('wss://echo-ws-service.herokuapp.com');
websocket.onopen = () => {
    console.log('Соединие установлено!');
    warning.style.display = "none";
    sendBtn.addEventListener('click', (e) => {
        if (inp.value === '') {
            e.preventDefault();
            console.log('ясно.')
        } else {
            e.preventDefault();
            let massage = document.createElement('p');
            massage.innerHTML = inp.value;
            massage.classList.add("chat-massage");
            board.appendChild(massage);
            inp.value = '';
            websocket.send(massage.textContent);
            websocket.onmessage = (e) => {
                board.innerHTML += `<p class="chat-massage left">${e.data}</p>`;
            };
        }
    })
}
const error = () => {
    board.innerHTML += `<p class="chat-massage" style="color: red">Невозможно получить доступ к геолокации</p>`;
}
const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    board.innerHTML += `<a class="chat-massage" style="color: blue" target="_blank" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Ваше местоположение</a>`;
}
geoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!navigator.geolocation) {
        board.innerHTML += `<p class="chat-massage">Geolocation не поддерживается вашим браузером</p>`;
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});
