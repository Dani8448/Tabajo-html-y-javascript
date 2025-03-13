document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("miBoton");

    boton.addEventListener("mouseover", function() {
        document.body.style.backgroundColor = "green"; 
    });

    boton.addEventListener("mouseout", function() {
        document.body.style.backgroundColor = ""; 
    });
});
