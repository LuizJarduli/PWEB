
onInit();

function setOpenedWindow(element) {
    element.src = './img/janelaaberta.png';
}

function setClosedWindow(element) {
    element.src = './img/janelafechada.png';
}

function setBrokenWindow(element) {
    element.src = './img/janelaquebra.png';
}


function onInit() {
    const getImageElement = document.querySelector('#application-wrapper > img');

    /** Programaticamente seta os eventos do elemento */
    getImageElement.addEventListener('mouseover', () => setOpenedWindow(getImageElement));
    getImageElement.addEventListener('mouseout', () => setClosedWindow(getImageElement));
    getImageElement.addEventListener('click', () => setBrokenWindow(getImageElement));
}
