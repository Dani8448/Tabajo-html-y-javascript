document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.getElementById("miFormulario");
    let campoTexto = document.getElementById("campoTexto");

    campoTexto.addEventListener("keydown", function(event) {
        if (event.key === "Enter") { 
            event.preventDefault();  // Evita el envío automático del formulario
            alert("Formulario enviado con Enter: " + campoTexto.value);
            formulario.submit();  // Envía el formulario manualmente
        }
    });
});
