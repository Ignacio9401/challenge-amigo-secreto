# Challenge Amigo Secreto
# Sorteo de Amigos 🎉

Este proyecto es una aplicación sencilla de JavaScript para agregar nombres de amigos y realizar un sorteo aleatorio entre ellos. Incluye validaciones para asegurar que solo se ingresen nombres válidos y no repetidos.

## Funcionalidades 📋
- **Agregar amigos:** Puedes agregar nombres de amigos a una lista.
- **Validación de entrada:**  
  - Solo permite ingresar nombres con letras y espacios (no se aceptan números ni caracteres especiales).  
  - Verifica que un nombre no sea ingresado dos veces.  
- **Sorteo aleatorio:** Realiza un sorteo para elegir un amigo al azar.  
- **Validación del sorteo:** Se requiere al menos 2 amigos para ejecutar el sorteo.  
- **Interfaz interactiva:** Muestra la lista de amigos y el resultado del sorteo en el HTML.

## Estructura del proyecto 📂
El proyecto consta de los siguientes elementos:
- **HTML:** Contiene el formulario de entrada y las secciones para mostrar la lista de amigos y el resultado del sorteo.  
- **CSS (opcional):** Para estilizar la página.  
- **JavaScript:** Lógica para agregar amigos, validar entradas y realizar el sorteo.

## Cómo usar el proyecto 🚀
1. Ingresa un nombre de amigo en el campo de texto y presiona el botón "Agregar".  
2. Repite el proceso hasta que tengas al menos 2 amigos en la lista.  
3. Presiona el botón "Sortear" para seleccionar un amigo al azar.  
4. El resultado aparecerá debajo del botón de sorteo.  

### Ejemplo de uso
1. Agrega los siguientes nombres: `Angel`, `Samael`, `Dillan`.  
2. Presiona el botón **Sortear**.  
3. Verás un resultado como: `"El amigo sorteado es: Samael"`.

## Código Principal 💻
El archivo `script.js` contiene la lógica principal del proyecto. Aquí algunos fragmentos clave:

### Agregar amigos
```javascript
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim();

    const soloLetras = /^[A-Za-z\s]+$/;
    if (!soloLetras.test(nombreAmigo)) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        input.value = "";
        input.focus();
        return;
    }
```
![Captura de pantalla (50)](https://github.com/user-attachments/assets/2dc0671d-278c-40b7-9c7c-b0cc67aedb9c)
![Captura de pantalla (51)](https://github.com/user-attachments/assets/60c9197e-b6fa-435a-a2b3-cd79de19b413)

```
    if (amigos.includes(nombreAmigo)) {
        alert("El nombre ya ha sido agregado. Ingrese uno diferente.");
        input.value = "";
        input.focus();
        return;
    }
```
![Captura de pantalla (49)](https://github.com/user-attachments/assets/83774d92-29bb-48a4-b2bc-833543057923)

    amigos.push(nombreAmigo);
    // Actualiza la lista en el HTML...
    ```
    
}


### Sortear un amigo
```javascript
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Muestra el resultado...
}
```
![Captura de pantalla (52)](https://github.com/user-attachments/assets/d862c19d-bb79-49a0-8cac-a7577489cd79)



## Requisitos ⚙️
- Navegador web con soporte para JavaScript.
- Archivo `index.html` para la estructura de la página.
- Archivo `script.js` para la lógica.



