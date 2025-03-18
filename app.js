let listaAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h2','Digite o nome dos seus amigos');
}

exibirMensagemInicial();

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
        if(nome === "") {
            alert("Por favor, digite um nome!");
            return; 
    }
    listaAmigos.push(nome);
    let novoItem = document.createElement("li");
    novoItem.textContent = nome;
    document.getElementById("listaAmigos").appendChild(novoItem);
    document.getElementById("amigo").value = "";
    console.log(listaAmigos);
}

function sortearAmigo() {
    if (listaAmigos.length < 1) {
        alert("Oops! Parece que não tens amigos para sortear... Digite pelo menos um nome!");
        return;
    }
    let index = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[index];
    exibirTextoNaTela('h2', 'O amigo secreto é: ' + amigoSecreto);
    listaAmigos.splice(index, 1);
    let listItems = document.querySelectorAll("#listaAmigos li");
    for (let item of listItems) {
        if (item.textContent === amigoSecreto) {
            item.classList.add("result-list"); 
            break;
        }
    }
}

function reiniciar() {
    listaAmigos = [];
    exibirMensagemInicial();
    document.getElementById("listaAmigos").innerHTML = "";
}