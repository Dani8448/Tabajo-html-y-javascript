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


document.addEventListener("DOMContentLoaded", function() {
    
    let btnVerde = document.getElementById("fondoVerde");
    let btnAzul = document.getElementById("fondoAzul");
    let btnReset = document.getElementById("resetFondo");

    
    btnVerde.addEventListener("click", function() {
        document.body.style.backgroundColor = "green";
    });

    btnAzul.addEventListener("click", function() {
        document.body.style.backgroundColor = "blue";
    });

    btnReset.addEventListener("click", function() {
        document.body.style.backgroundColor = ""; 
    });
});
