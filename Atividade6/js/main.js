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

function setResultado(nome, media) {
    const nomeContainer = document.getElementById('nome');
    const mediaContainer = document.getElementById('media');

    nomeContainer.innerHTML = '';
    mediaContainer.innerHTML = '';

    nomeContainer.insertAdjacentText('beforebegin', `Aluno: ${nome}`);
    mediaContainer.insertAdjacentText('beforebegin', `Média: ${parseFloat(media)?.toFixed(2)}`);
}

function onInit() {
    alert('Insira seu nome e notas para calcular a média aritmética');
    const nome = getNome();
    const notas = getNotas(3);
    const media = calcMedia(notas);
    setResultado(nome, media);
}
