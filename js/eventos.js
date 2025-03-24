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
const listaDeElementos = ['500€', '1000€', '1250€', '1700€', '2000€'];

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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let valido = true;
        let mensajeError = "";

        // Validar nombre
        const nombre = form.nombre.value.trim();
        if (nombre.length < 3 || nombre.length > 50) {
            valido = false;
            mensajeError += "El nombre debe tener entre 3 y 50 caracteres.\n";
        }

        // Validar correo electrónico
        const email = form.email.value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            valido = false;
            mensajeError += "El correo electrónico no es válido.\n";
        }

        // Validar teléfono
        const telefono = form.telefono.value.trim();
        const telefonoRegex = /^\+34 \d{3} \d{3} \d{3}$/;
        if (!telefonoRegex.test(telefono)) {
            valido = false;
            mensajeError += "El formato del teléfono debe ser: +34 123 456 789.\n";
        }

        // Validar asunto
        const asunto = form.asunto.value.trim();
        if (asunto.length < 5 || asunto.length > 100) {
            valido = false;
            mensajeError += "El asunto debe tener entre 5 y 100 caracteres.\n";
        }

        // Validar mensaje
        const mensaje = form.mensaje.value.trim();
        if (mensaje.length < 10 || mensaje.length > 500) {
            valido = false;
            mensajeError += "El mensaje debe tener entre 10 y 500 caracteres.\n";
        }

        // Validar edad
        const edad = parseInt(form.edad.value);
        if (isNaN(edad) || edad < 18 || edad > 100) {
            valido = false;
            mensajeError += "La edad debe estar entre 18 y 100 años.\n";
        }

        // Validar servicio elegido
        if (form.servicio.value === "") {
            valido = false;
            mensajeError += "Debes seleccionar un servicio.\n";
        }

        // Si hay errores, cancelar el envío y mostrar alerta
        if (!valido) {
            alert(mensajeError);
            event.preventDefault(); // Evita que el formulario se envíe
        }
    });
});

