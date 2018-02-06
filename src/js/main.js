$(document).ready(function(){

    clientList.loadClientsFromServer();

	// evento para mandar datos al modal de editar
	$(".datosTabla").on("click",".editar",function(){


		var id = $(this).closest("tr").attr('class');

		var index = clientList.getClientFromArray(id);

		//necesito sabeer si es hombre o mujer para enviar a la plantilla el checked correcto
		var hombre = false;
		var mujer = false;
		if(clientList.arrayClients[index].alternativas=="M"){
			mujer = true;
		}else{
			hombre = true;
		}

		var data = {
        	titulo:"Estas Modificando un Cliente",
        	opcion_confirmar:"Confirmar Modificacion",
        	id_confirmar:"confirmar_modificacion",
        	hombre:hombre,
        	mujer:mujer,
        	cliente:{
        		"cliente_id":clientList.arrayClients[index].cliente_id,
        		"nombres":clientList.arrayClients[index].nombres,
        		"ciudad":clientList.arrayClients[index].ciudad,
        		"alternativas":clientList.arrayClients[index].alternativas,
        		"telefono":clientList.arrayClients[index].telefono,
        		"fecha_nacimiento":clientList.arrayClients[index].fecha_nacimiento,
        		"direccion":clientList.arrayClients[index].direccion,
        		"provincia":clientList.arrayClients[index].provincia
        	}
    	}

    	events.publish("renderClient",data);

	})

	//evento que dispara la llamada AJAX de editar
	$(".modal-container").on("click","#confirmar_modificacion",function(){

		var id = $(this).attr("data-id");

		var data = {
			"cliente_id":id,
			"nombres":$("#modal_nombre").val(),
			"ciudad":$("#modal_ciudad").val(),
			"alternativas":$('input[name=sexo]:checked').val(),
			"telefono":$("#modal_telefono").val(),
			"fecha_nacimiento":$("#modal_fecha_nacimiento").val() + " 00:00:00",    // es para que cuando modifique guarde en el array el mismo formato que recibe, da igual porque hace el update igual pero por seguir un orden...
			"direccion":$("#modal_direccion").val(),
			"provincia":$("#modal_provincia").val(),
			"fechaAlta":clientList.arrayClients[clientList.getClientFromArray(id)].fechaAlta
		}

		// ajax
		clientList.updateClient(data);
		
	})

	//evento que dispara el modal para nuevo
	$(".datosTabla").on("click",".nuevo", function(){

		var data = {
        	titulo:"Estas Creando un Nuevo Cliente",
        	opcion_confirmar:"Confirmar Nuevo Cliente",
        	id_confirmar:"confirmar_nuevo",
        	cliente:{
        		"cliente_id":"",
        		"nombres":"",
        		"ciudad":"",
        		"alternativas":"",
        		"telefono":"",
        		"fecha_nacimiento":"",
        		"direccion":"",
        		"provincia":""
        	}
    	}

    	events.publish("renderClient",data)
	})

	//evento que dispara la llamada AJAX para nuevo
	$(".modal-container").on("click","#confirmar_nuevo",function(){

		var data = {
			"nombres":$("#modal_nombre").val(),
			"ciudad":$("#modal_ciudad").val(),
			"alternativas":$('input[name=sexo]:checked').val(),
			"telefono":$("#modal_telefono").val(),
			"fecha_nacimiento":$("#modal_fecha_nacimiento").val(),
			"direccion":$("#modal_direccion").val(),
			"provincia":$("#modal_provincia").val()
		}

		clientList.addNewClient(data);
	})




	//voy hacer el borrar
	$(".datosTabla").on("click",".borrar",function(){
		var trId = $(this).closest("tr").attr("class");
		clientList.deleteClient(trId);
	})

	//modal para enseñar el mapa
	$(".datosTabla").on("click",".mapa",function(){
		//empiezo el ajax para coger la latitud y longitud de la direccion del tr
		var id = $(this).closest("tr").attr('class');
		var index = clientList.getClientFromArray(id);

		var address = clientList.arrayClients[index].direccion;
		var key = "AIzaSyDMAvzeTh-Y79QJ4xejgBwpIzZBGQFidSA";

		var url = "https://maps.googleapis.com/maps/api/geocode/json";

		$.ajax({
					url:url,
					type:"GET",
					data:{address:address,key:key},
					dataType:"json",
					success: function(data){
						uluru = {lat:data.results[0].geometry.location.lat,lng:data.results[0].geometry.location.lng};
						initMap();
					},
					error: function(){
						console.log("Hubo algun error")
					}
				})

	})



	/*
		transformar la fecha en  formato 2015-12-02 00:00:00 a 02/12/2015
	*/
	Handlebars.registerHelper('formatDate', function(stringDate){
		return stringDate.split(' ')[0].split('-').reverse().join('/');
	})

	Handlebars.registerHelper('setDateOnInput', function(stringDate){
		return stringDate.split(' ')[0]
	})

})