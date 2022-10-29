function calcMedia(notas = []) {
    const qtdNotas = notas.length;
    return notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0) / qtdNotas;
}

function getNotas(qtdNotas = 1) {
    let perguntasRespondidas = 0;
    const notas = [];
    while (perguntasRespondidas < qtdNotas) {
        notas.push(Number(prompt(`Digite o valor da ${perguntasRespondidas + 1}ª nota`) || 0));
        perguntasRespondidas++;
    }

    return notas;
}

function getNome() {
    return prompt('Nome do aluno:')
}

function setResultadoMedia(nome, media) {
    const nomeContainer = document.getElementById('nome');
    const mediaContainer = document.getElementById('media');

    nomeContainer.innerHTML = '';
    mediaContainer.innerHTML = '';

    nomeContainer.insertAdjacentText('beforebegin', `Aluno: ${nome}`);
    mediaContainer.insertAdjacentText('beforebegin', `Média: ${parseFloat(media)?.toFixed(2)}`);
}

function setResultadoNoElemento(idDoElemento, resultado) {
    const elemento = document.getElementById(idDoElemento);

    elemento.insertAdjacentHTML('beforeend', `<p>${resultado}</p>`)
}

function getDoisNumeros() {
    let qtdNums = 0;
    let numeros = [];
    while (qtdNums < 2) {
        numeros.push(Number(prompt(`Digite o ${qtdNums + 1}`)));
        qtdNums++;
    }

    return numeros;
}

function calcularEval(numeros = [], operacao = '*') {
    const stringOperacao = numeros.reduce((prev, current) => `${prev}${operacao}${current}`);
    return eval(stringOperacao);
}

function executarCalculos(numeros = []) {
    // calculos
    const soma = `Soma: ${calcularEval(numeros, '+')}`;
    const subtracao = `Subtração: ${calcularEval(numeros, '-')}`;
    const multiplicacao = `Multiplicação: ${calcularEval(numeros, '*')}`;
    const divisao = `Divisão: ${calcularEval(numeros, '/')}`;
    const resto = `Resto: ${calcularEval(numeros, '%')}`;

    return [soma, subtracao, multiplicacao, divisao, resto];

}

function onInitMedia() {
    alert('Insira seu nome e notas para calcular a média aritmética');
    const nome = getNome();
    const notas = getNotas(3);
    const media = calcMedia(notas);
    setResultadoMedia(nome, media);
}

function onInitOperacoes() {
    alert('Insira dois numeros para realizar operações de soma, subtração, multiplicação, divisão e calcular seu resto');
    const numeros = getDoisNumeros();
    const getCalculos = executarCalculos(numeros);
    getCalculos.forEach((calculo) => setResultadoNoElemento('resultado', calculo));
}
