
onInit();

/**
 * setOpenedWindow
 *
 * Troca a img de fundo para janela aberta
 * @param element 
 */
function setOpenedWindow(element) {
    element.src = './img/janelaaberta.png';
}

/**
 * setClosedWindow
 *
 * Troca a img de fundo para janela fechada
 * @param element 
 */
function setClosedWindow(element) {
    element.src = './img/janelafechada.png';
}

/**
 * setBrokenWindow
 *
 * Troca a img de fundo para janela quebrada
 * @param element 
 */
function setBrokenWindow(element) {
    element.src = './img/janelaquebra.png';
}

/**
 * onInit
 *
 * função que inicializa o script
 */
function onInit() {
    const getImageElement = document.querySelector('#application-wrapper > img');

    /** Programaticamente seta os eventos do elemento */
    getImageElement.addEventListener('mouseover', () => setOpenedWindow(getImageElement));
    getImageElement.addEventListener('mouseout', () => setClosedWindow(getImageElement));
    getImageElement.addEventListener('click', () => setBrokenWindow(getImageElement));
}
