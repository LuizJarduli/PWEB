import { EnumElementsTableData } from "./EnumElementsTableData.js";

onInit();

function getQuestionarie() {
    let stilQuestioning = false;
    const allAnswers = []
    do {
        const age = Number(prompt('Qual sua idade ?'));
        const sex = String(prompt('Qual seu sexo? (F - feminino, M - masculino)'));
        const opinion = Number(prompt('Digite sua opinião onde: ótimo=4,bom=3,regular=2,péssimo=1.'));

        allAnswers.push({ age, sex, opinion });

        stilQuestioning = willContinuePrompt();
    } while (stilQuestioning);

    return allAnswers;
}

function willContinuePrompt() {
    return confirm('Deseja inserir outra pesquisa?');
}

function getAverageFromValue(dataCollection = [], keyToAverage) {
    return dataCollection.reduce((prev, curr) => (prev + curr[keyToAverage]) / dataCollection.length, 0);
}

function getBiggerFromValue(dataCollection = [], keyToExtractBigger) {
    return dataCollection.reduce((prev, curr) => prev = curr[keyToExtractBigger] > prev ? curr[keyToExtractBigger] : prev, 0);
}

function getMinorFromValue(dataCollection = [], keyToExtractMinor) {
    return dataCollection.reduce((prev, curr) => prev = curr[keyToExtractMinor] > prev ? prev : curr[keyToExtractMinor]);
}

// function getMinorFromValue(dataCollection = [], accumulateKey, accumulateValue) {
//     return dataCollection.reduce((prev, curr) => prev + , 0);
// }

function populateTableFromCollection(collection = []) {

    // Recupera os containters dos resultados da tabela
    const mediaIdade = document.getElementById(EnumElementsTableData.MEDIA_IDADE);
    const maiorIdade = document.getElementById(EnumElementsTableData.MAIOR_IDADE);
    const menorIdade = document.getElementById(EnumElementsTableData.MENOR_IDADE);
    const qtdPessimo = document.getElementById(EnumElementsTableData.QTD_PESSIMO);
    const qtdMulheres = document.getElementById(EnumElementsTableData.QTD_MULHERES);
    const qtdHomens = document.getElementById(EnumElementsTableData.QTD_HOMENS);
    const pctOtimoBom = document.getElementById(EnumElementsTableData.QTD_PESSIMO);

    mediaIdade.innerText = getAverageFromValue(collection, 'age');
    maiorIdade.innerText = getBiggerFromValue(collection, 'age');
    menorIdade.innerText = getMinorFromValue(collection, 'age');
    qtdPessimo.innerText = getQtdFromValue(collection, 'opinion', 1);
    // qtdMulheres.innerText = getQtdFromValue(collection, 'sex', 'F');
    // qtdHomens.innerText = getQtdFromValue(collection, 'sex', 'M');
    // pctOtimoBom.innerText = getPercentFromValue(collection, 'opinion', [4,3]);
}

function onInit() {
    const allAnswersCollection = getQuestionarie();
    const getWrapper = document.getElementById('application-wrapper');
    getWrapper.style.display = 'block';
    populateTableFromCollection(allAnswersCollection);
}