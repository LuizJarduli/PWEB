import { jokempoEnumValues } from './jokempo.enum.js';

/**
 * Gera randomicamente uma aposta de jokempo contra o jogador.
 * A regra é: entre 0 e 1, reparte em 0,33 para cada opção de jokempo, retornando a opção.
 */
function getJokempoMatchup() {
    const randomValue = Math.random();

    if (randomValue <= 0.33) {
        return jokempoEnumValues.ROCK;
    } else if (randomValue <= 0.66) {
        return jokempoEnumValues.PAPER;
    } else {
        return jokempoEnumValues.SCISOR;
    }
}

/**
 * Inicializa o jokempo.
 *
 * @param selectedOption opção selecionada para o user
 */
function start(selectedOption) {
    let userWinner = null;
    const getMatchup = getJokempoMatchup();

    // Caso seja pedra
    if (selectedOption === jokempoEnumValues.ROCK) {
        userWinner = getMatchup === jokempoEnumValues.SCISOR ? true : (getMatchup === jokempoEnumValues.PAPER ? false : null);
    }

    // Caso seja papel
    else if (selectedOption === jokempoEnumValues.PAPER) {
        userWinner = getMatchup === jokempoEnumValues.ROCK ? true : (getMatchup === jokempoEnumValues.SCISOR ? false : null);
    }

    // Caso seja tesoura
    else if (selectedOption === jokempoEnumValues.SCISOR) {
        userWinner = getMatchup === jokempoEnumValues.PAPER ? true : (getMatchup === jokempoEnumValues.ROCK ? false : null);
    }

    alert(`sua escolha: ${selectedOption} vS máquina: ${getMatchup} = ${userWinner === null ? 'Empate' : (userWinner ? 'Você Venceu': 'Você Perdeu')}`);
}