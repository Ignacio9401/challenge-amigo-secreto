let amigos = []; // Array para almacenar los nombres de los amigos.

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim(); // Obtener el nombre ingresado y eliminar espacios extras.

    // Validar que el nombre solo contenga letras y espacios.
    const soloLetras = /^[A-Za-z\s]+$/;
    if (!soloLetras.test(nombreAmigo)) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        input.value = "";
        input.focus();
        return;
    }

    // Verificar si el nombre ya está en la lista.
    if (amigos.includes(nombreAmigo)) {
        alert("El nombre ya ha sido agregado. Ingrese uno diferente.");
        input.value = "";
        input.focus();
        return;
    }

    // Añadir el nombre del amigo a la lista.
    amigos.push(nombreAmigo);

    // Actualizar la lista de amigos mostrada en el HTML.
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoAmigo);

    // Limpiar el campo de entrada.
    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    // Elegir un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = ""; // Limpiar resultados anteriores.

    const item = document.createElement("li");
    item.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultadoList.appendChild(item);
}
