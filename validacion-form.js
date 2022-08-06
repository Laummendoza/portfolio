document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("formulario")
		.addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
	evento.preventDefault();
	var nombre = document.getElementById("formulario__nombre").value;
	if (nombre.length == 0) {
		alert("Por favor, completa el Nombre y Apellido");
		return;
	}
	if (nombre.length > 50) {
		alert("Nombre y Apellido debe tener menos de 50 caracteres");
	}

	var email = document.getElementById("formulario__email").value;
	if (email.length == 0) {
		alert("Por favor, escribe tu correo electronico");
		return;
	}

	var asunto = document.getElementById("formulario__asunto").value;
	if (asunto.length == 0) {
		alert("Por favor, completa el Asunto");
		return;
	}

	if (asunto.length > 50) {
		alert("Ingresa un Asunto menor a 50 caracteres");
		return;
	}

	var mensaje = document.getElementById("formulario__mensaje").value;
	if (mensaje.length == 0) {
		alert("Por favor, ingresa un mensaje.");
		return;
	}

	if (mensaje.length > 300) {
		alert("Por favor, ingresa un mensaje menor a 300 caracteres.");
		return;
	}

	this.submit();
}
