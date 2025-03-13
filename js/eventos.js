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



