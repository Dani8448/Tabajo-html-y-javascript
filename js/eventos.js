document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.querySelector("form"); 
    let inputs = formulario.querySelectorAll("input, textarea"); 

    inputs.forEach(input => {
        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") { 
                event.preventDefault();  
                alert("Formulario enviado con Enter");
                formulario.submit();  
            }
        });
    });
});

// Función para cambiar el color de fondo de la página
function cambiarFondo(color) {
    document.body.style.backgroundColor = color;
}

// Asignar eventos a los botones de cambio de fondo
document.getElementById("botonAzul").addEventListener("click", function() {
    cambiarFondo("lightblue");
});

document.getElementById("botonVerde").addEventListener("click", function() {
    cambiarFondo("lightgreen");
});

document.getElementById("botonCoral").addEventListener("click", function() {
    cambiarFondo("lightcoral");
});

// Función para cambiar el color y tamaño del texto al hacer clic
function cambiarTexto(elemento, color, tamaño) {
    elemento.style.color = color;
    elemento.style.fontSize = tamaño;
}

// Asignar evento al texto para cambiar su estilo al hacer clic
document.getElementById("textoDinamico").addEventListener("click", function() {
    cambiarTexto(this, "red", "30px");
});

// Crear dinámicamente una lista de elementos
const listaDeElementos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5'];

const ul = document.getElementById('listaGenerada');

for (let i = 0; i < listaDeElementos.length; i++) {
    const li = document.createElement('li');
    li.classList.add('elemento');
    li.textContent = listaDeElementos[i];

    // Aplicar un cambio de estilo con un condicional
    if (i % 2 === 0) {
        li.style.backgroundColor = '#f0f0f0'; // Color de fondo alternado
    } else {
        li.style.backgroundColor = '#e0e0e0';
    }

    ul.appendChild(li);
}

// Evento de teclado para cambiar el fondo de la página
window.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'b': // Tecla 'b' para fondo azul claro
            cambiarFondo('lightblue');
            break;
        case 'g': // Tecla 'g' para fondo verde claro
            cambiarFondo('lightgreen');
            break;
        case 'r': // Tecla 'r' para fondo coral claro
            cambiarFondo('lightcoral');
            break;
        default:
            break;
    }
});

