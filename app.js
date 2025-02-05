let listaAmigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, informe um nome antes de adicionar.");
        return;
    }

    listaAmigos.push(nome);
    inputNome.value = "";
    inputNome.focus(); // Retorna o foco para o campo de entrada
    atualizarLista();
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de adicionar os nomes atualizados

    listaAmigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("É necessário pelo menos 2 participantes para sortear.");
        return;
    }

    let sorteio = [...listaAmigos];
    let amigoSorteado;

    do {
        amigoSorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
    } while (listaAmigos.length === 1 || amigoSorteado === listaAmigos[0]);

    exibirResultado(amigoSorteado);
}

function exibirResultado(amigo) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<li>O amigo secreto SORTEADO É: <strong>${amigo}</strong></li>`;

    let botaoNovoSorteio = document.getElementById("novoSorteio");

    // Se o botão ainda não existe, cria um novo
    if (!botaoNovoSorteio) {
        let buttonContainer = document.querySelector(".button-container");
        botaoNovoSorteio = document.createElement("button");
        botaoNovoSorteio.id = "novoSorteio";
        botaoNovoSorteio.classList.add("button-draw"); // Usa o mesmo estilo do botão "Sortear Amigo"
        botaoNovoSorteio.innerHTML = `
            <img src="assets/play_circle_outline.png" alt="Ícone para novo sorteio">
            Novo Sorteio
        `;
        botaoNovoSorteio.onclick = atualizarPagina;
        buttonContainer.appendChild(botaoNovoSorteio);
    }
}

// Função para atualizar a página e focar no campo de entrada após recarregar
function atualizarPagina() {
    location.reload(); // Atualiza a página completamente
}

// Garante que, ao carregar a página, o cursor vá direto para o campo "Digite um nome"
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("amigo").focus();
});

