var nombre = document.getElementById("name");
var apellido = document.getElementById("lastname");	
var correo = document.getElementById("input-email");
var pass = document.getElementById("input-password");
var lista = document.getElementById("lista");
		
var validaName = function() {
	
 nombre.focus();		
	
	var patron = /^[a-zA-Z_áéíóúñ]*$/;

		if(nombre.value == null || nombre.value.length == 0 || nombre.value.search(patron) || nombre.value[0] !== nombre.value[0].toUpperCase()) {		
			alert("Ingrese el Nombre es Obligatorio, Recuerde la primera es Mayúscula");
			nombre.value="";
			nombre.focus();
			
			}

		else {
			   apellido.focus();
			 }
}

var validaLastName = function() {

	var patron = /^[a-zA-Z_áéíóúñ]*$/;

	 if (apellido.value == null || apellido.value.length == 0 || apellido.value.search(patron) || apellido.value[0] !== apellido.value[0].toUpperCase())
			{	
				alert("Ingrese el Apellido es Obligatorio, Recuerde la primera es Mayúscula");
				apellido.value="";
				apellido.focus();
					
			}

	else 	{
				correo.focus();	
			}
	
	}


var validaCorreo = function	() {

		var patron = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;

    if (correo.value.search(patron)) {
    	alert("Ingrese un correo Valido");
    	correo.value="";
    	correo.focus();	
    	
    }

    else {
			pass.focus();		
		 }

}


var validarPass = function	() {

 if (pass.value == null || pass.value.length == 0 || pass.value == 123456 || pass.value == 098754 || pass.value.length <= 6) {
 	 alert("La clave debe contener mínimo 6 caracteres");
 	 pass.value="";
 	 pass.focus();
 	 
 	}

}


var validarSelect = function() {

 if(lista.value == 0) {
	alert("Debe seleccionar una opción de la lista");
	}

}



function validateForm(){

/* Escribe tú código aquí */
validaName();
validaLastName();
validaCorreo();
validarPass	();
validarSelect();

}

