// mudar a cor do background clicando de acordo com a cor do botão

const botaoVerde = document.querySelector('.verde');
const botaoVermelho = document.querySelector('.vermelho');
const botaoAzul = document.querySelector('.azul');
const quadrado = document.querySelector('.quadrado');
const html = document.querySelector('html');

// CLICANDO NO BOTAO MUDA O QUADRADO DE COR
botaoVerde.addEventListener('click', () => {
    quadrado.setAttribute("data-contexto", "cor-verde");

});

botaoAzul.addEventListener('click', () => {

    quadrado.setAttribute("data-contexto", "cor-azul");

});

botaoVermelho.addEventListener('click', () => { 
    quadrado.setAttribute("data-contexto", "cor-vermelha");
});