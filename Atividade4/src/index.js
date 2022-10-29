/** Importa as variáveis com mensagens sobre realizar um deploy hoje */
import { 
    REASONS_FOR_AFTERNOON,
    REASONS_FOR_WEEKEND,
    REASONS_FOR_FRIDAY_13TH,
    REASONS_FOR_FRIDAY_AFTERNOON,
    REASONS_FOR_THURSDAY_AFTERNOON,
    REASONS_TO_DEPLOY,
    REASONS_TO_NOT_DEPLOY,
} from './assets/reasons/reasons.js';

/** Inicializa o script */
onInit();


/**
 * Recupera a mensagem do momento atual (Data UTC).
 */
export function getTodaysMsg() {
    /** Objeto com referência para os dias da semana e as mensagens */
    const setForDays = {
        0: REASONS_FOR_WEEKEND,
        1: [...REASONS_TO_DEPLOY, REASONS_FOR_AFTERNOON],
        2: [...REASONS_TO_DEPLOY, REASONS_FOR_AFTERNOON],
        3: [...REASONS_TO_DEPLOY, REASONS_FOR_AFTERNOON],
        4: [...REASONS_TO_DEPLOY, ...REASONS_FOR_THURSDAY_AFTERNOON],
        5: [...REASONS_FOR_FRIDAY_13TH, ...REASONS_FOR_FRIDAY_AFTERNOON, REASONS_TO_NOT_DEPLOY],
        6: REASONS_FOR_WEEKEND,
    };

    /** Recupera o dia da semana e faz a relação entre a msg */
    const today = new Date();
    const day = today.getUTCDay();
    const hours = today.getUTCHours();
    const selectedReason = setForDays[day];
    const reason = getRandom(selectedReason);

    /** Seta o valor recuperado dentro do elemento de parágrafo (p) */
    const mainText = document.getElementById('texto-principal');

    /** Lida com estilo do container do texto */
    setStylesForTheDay(day);

    mainText.innerText = reason;
}

/**
 * Recupera um valor aleatório dado um array de tamanho N.
 * @param {*} list lista na qual será feita a coleta de um item randômico
 */
function getRandom(list = []) {
    return list[Math.floor((Math.random() * list.length))];
}

/**
 * Aplica estilos customizados de acordo com dia da semana.
 * @param {*} day Dia da semana [0,1,2,3,4,5,6] sendo 0=Domingo
 */
function setStylesForTheDay(day = 0) {
    /** Elementos que sofreram alterações em seus estilos dependendo do dia */
    const main = document.querySelector('main');
    const footerText =  document.getElementById('footer');
    const menuItens = Array.from(document.getElementsByTagName('li'));
    const paragraphs = Array.from(document.getElementsByTagName('p'));
    const exceptionsRule = [0,5,6].includes(day);

    /** Aplica as regras de coloração */
    footerText.classList = `${exceptionsRule ? 'not-deploy' : 'deploy'}`;
    main.classList = `${exceptionsRule ? 'not-deploy' : 'deploy'}`;
    menuItens.forEach((item) => item.classList = `${exceptionsRule ? ' not-deploy' : ' deploy'}`);
    paragraphs.forEach((item) => item.classList = `${exceptionsRule ? ' not-deploy' : ' deploy'}`);
}

/**
 * Seta eventos no elemento main
 */
function setEventListenerOnMain() {
    const main = document.querySelector('main');
    main.addEventListener('click', () => getTodaysMsg());
}

/**
 * Inicializa a página recuperando a mensagem do momento
 */
function onInit() {
    setEventListenerOnMain();
    getTodaysMsg();
}


