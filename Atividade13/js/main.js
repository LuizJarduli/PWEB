
onInit();

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
