let amigos = [];

function adicionarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNome = document.getElementById('inputNome');
    let nome = inputNome.value.trim();

    // Validar la entrada
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nome);

    // Limpiar el campo de entrada
    inputNome.value = '';

    // Atualizar a lista de amigos
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    // Obtener el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = '';

    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('Nenhum amigo adicionado ainda.');
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
