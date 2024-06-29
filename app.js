var entradaTexto = document.querySelector('#entrada-texto');
var saida = document.querySelector('#saida');

function removeAcentos(texto) {
    const map = {
        'á': 'a', 'à': 'a', 'ã': 'a', 'â': 'a', 'ä': 'a',
        'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
        'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
        'ó': 'o', 'ò': 'o', 'õ': 'o', 'ô': 'o', 'ö': 'o',
        'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
        'ç': 'c', 'ñ': 'n'
    };

    const regex = /[áàãâäéèêëíìîïóòõôöúùûüçñ]/gi;

    return texto.replace(regex, function(match) {
        return map[match];
    });
}

function criptografar() {

    var texto = entradaTexto.value;

    texto = removeAcentos(texto);

    var resultadoCriptografia = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    saida.innerHTML = '<nav class="containerSaida"><textarea readonly class="saidaProcessada">' + resultadoCriptografia + '</textarea>' + '<button class="botao-copiar" onclick="copiar()">Copiar</button></nav>';
}

function descriptografar() {

    var texto = entradaTexto.value;

    texto = removeAcentos(texto);

    var resultadoDescriptografia = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    saida.innerHTML = '<textarea readonly class="saidaProcessada">' + resultadoDescriptografia + '</textarea>' + '<button class="botao-copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoProcessado = saida.querySelector('textarea');
    textoProcessado.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}