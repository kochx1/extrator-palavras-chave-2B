const botaoMostraPalavras = document.queryselector("#botao-palavrachave");

botaoMostraPalavras.addEvenList("click", mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto = document.queryselector("#entrada-de-texto").value;
    const campoResultado = document.queryselector("#resultado-palavrachave");
    const palavras = texto.split(" ")

    campoResultado.textContent = palavras.join(", ")
}