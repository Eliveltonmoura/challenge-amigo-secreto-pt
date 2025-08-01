//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigosSecretos = [];

function exibirNaTela(amigo) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigo;
}

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value
    
    if(nomeDoAmigo == ''){
     alert("Digite um nome valido");
    }
    else{
    

    listaDeAmigosSecretos.push(nomeDoAmigo);

    exibirNaTela(listaDeAmigosSecretos);
    }
    limpaCompo();
}

function limpaCompo() {
    let nomes = document.querySelector('input');
    nomes.value = '';
}

function sortearAmigo() {

    indiceAleatorio = Math.floor(Math.random() * listaDeAmigosSecretos.length);
    listaDeAmigosSecretos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = listaDeAmigosSecretos[indiceAleatorio];


}