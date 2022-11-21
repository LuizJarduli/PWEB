
onInit();

function getNumbers(qtdNum) {
    const nums = [];

    while (nums.length < qtdNum) {
        nums.push(parseInt(prompt('Digite um número')));  
    }

    return nums;
}

function getBigger(num1, num2, num3) {
    return [num1, num2, num3].reduce((bigger, currentValue) => bigger > currentValue ? bigger : currentValue, 0);
}

function getSortedNumbersString(num1, num2, num3) {
    return [num1, num2, num3].sort().join(', ');
}

function onInit() {
    const getWrapper = document.getElementById('application-wrapper');

    /** Armazena os números selecionados */
    const [num1, num2, num3] = getNumbers(3);

    /** Armazena o maior número dentre os parâmetros */
    const bigger = getBigger(num1, num2, num3);
    
    /** Armazena a ordenação dos números inseridos */
    const sortedNumbers = getSortedNumbersString(num1, num2, num3);

    /** Exibe os resultados */
    getWrapper.style.display = 'block';
    getWrapper.innerHTML += `<p><strong>Ordem crescente dos números: </strong>${sortedNumbers}</p>`;
    getWrapper.innerHTML += `<p><strong>Maior número digitado: </strong>${bigger}</p>`;
}
