// Variáveis para guardar o estado da nossa calculadora
let valorAtual = '0';
let valorAnterior = '';
let operacaoPendente = null;

// Captura a tela do visor para podermos atualizar o texto dele
const visor = document.getElementById('visor-fofinho');

// Função para atualizar o que aparece na tela
function atualizarVisor() {
    visor.innerText = valorAtual;
}

// Executada quando qualquer número ou o ponto é clicado
function adicionarNumero(numero) {
    // Evita colocar mais de um ponto decimal
    if (numero === '.' && valorAtual.includes('.')) return;

    // Se o visor tiver apenas o '0', substitui pelo número clicado
    if (valorAtual === '0' && numero !== '.') {
        valorAtual = numero;
    } else {
        valorAtual += numero;
    }
    atualizarVisor();
}

// Executada ao clicar em +, -, × ou ÷
function definirOperacao(operacao) {
    if (operacaoPendente !== null) {
        calcularResultado();
    }
    valorAnterior = valorAtual;
    operacaoPendente = operacao;
    valorAtual = '0'; // Reseta o visor para receber o próximo número
}

// Executada ao clicar no botão de igual (=)
function calcularResultado() {
    if (operacaoPendente === null || valorAnterior === '') return;

    let resultado = 0;
    const numAnterior = parseFloat(valorAnterior);
    const numAtual = parseFloat(valorAtual);

    // Estrutura de decisão para cada tipo de conta
    switch (operacaoPendente) {
        case '+':
            resultado = numAnterior + numAtual;
            break;
        case '-':
            resultado = numAnterior - numAtual;
            break;
        case '*':
            resultado = numAnterior * numAtual;
            break;
        case '/':
            // Evita divisão por zero
            resultado = numAtual === 0 ? 'Erro' : numAnterior / numAtual;
            break;
    }

    valorAtual = String(resultado);
    operacaoPendente = null;
    valorAnterior = '';
    atualizarVisor();
}

// Executada ao clicar no botão 'C' (Limpar)
function limparVisor() {
    valorAtual = '0';
    valorAnterior = '';
    operacaoPendente = null;
    atualizarVisor();
}
