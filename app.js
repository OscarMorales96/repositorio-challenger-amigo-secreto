// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if(nombreAmigo === "") {
        alert('Por favor, ingrese un nombre.');
        return;
    }

    listaDeAmigos.push(nombreAmigo);
   
    document.getElementById('amigo').value = "";

    actualizarListaDeAmigos();
}

function actualizarListaDeAmigos(){
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";

    for (let amigo of listaDeAmigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`
}