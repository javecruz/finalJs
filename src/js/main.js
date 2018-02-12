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


	//evento para mostrar los coches
	$(".datosTabla").on("click",".coches",function(){
		var id = $(this).closest("tr").attr('class');
		carList.getCars(id);
	})

	//editar coche
	$(".modal-coches-container").on("click",".editar-coche",function(){
		var tr = $(this).closest("tr");
		tr.find("input").each(function(){
			$(this).prop("disabled",false)
		})

		// oculto boton editar del tr en concreto y muestro el boton de confirmar
		tr.find(".editar-coche").addClass("d-none");
		tr.find(".confirmar-editar-coche").removeClass("d-none");

		//muestra select en tipo y oculta el otro input
		tr.find("input").eq(0).addClass("d-none");
		tr.find("select").eq(0).removeClass("d-none");	
	})

	//confirmar edicion del coche
	$(".modal-coches-container").on("click",".confirmar-editar-coche",function(){
		var tr = $(this).closest("tr");
		tr.find("input").each(function(){
			$(this).prop("disabled",true)
		})

		//hacer la llamada a la api para insertar el coche modificado
		var idCoche =  tr.attr("data-id");
		var idCliente = $(".tabla-Coches").attr("data-id-cliente");
		var tipo = tr.find("select").eq(0).val();
		var marca = tr.find("input").eq(1).val();
		var modelo = tr.find("input").eq(2).val();
		var matricula = tr.find("input").eq(3).val();
		var fechaFabricacion = tr.find("input").eq(4).val()  + " 00:00:00";

		var data = {
			idCoche:idCoche,
			idCliente:idCliente,
			tipo:tipo,
			marca:marca,
			modelo:modelo,
			matricula:matricula,
			fechaFabricacion:fechaFabricacion
		}

		carList.update(data);

		tr.find("input").eq(0).val(tr.find("select option:selected").eq(0).text()); // setea el input
		tr.find("input").eq(0).removeClass("d-none");
		tr.find("select").eq(0).addClass("d-none");
		tr.find(".confirmar-editar-coche").addClass("d-none");
		tr.find(".editar-coche").removeClass("d-none");
	})




	//evento insertar nuevo coche
	$(".modal-coches-container").on("click",".nuevo-coche", function(){

		var num = $(".tabla-Coches").find("tr").last().find("th").eq(0).html() * 1 + 1; // es para poner el siguiente numero en la plantilla
		var data = {
			num:num
		}
		//llamar plantilla de nuevo coche
		var html = Handlebars.templates.renderNuevoCoche(data);
		$(".tabla-Coches").append(html);

		$(".nuevo-coche").addClass("d-none");

	})


	//evento confirmar nuevo coche

	$(".modal-coches-container").on("click",".confirmar-nuevo-coche",function(){

		var tr = $(this).closest("tr");

		var idCliente = $(".tabla-Coches").attr("data-id-cliente");
		var tipo = tr.find("select").eq(0).val();
		var marca = tr.find("input").eq(1).val();
		var modelo = tr.find("input").eq(2).val();
		var matricula = tr.find("input").eq(3).val();
		var fechaFabricacion = tr.find("input").eq(4).val()  + " 00:00:00";

		var data = {
			matricula:matricula,
			fechaFabricacion:fechaFabricacion,
			marca:marca,
			modelo:modelo,
			idCliente:idCliente,
			tipo:tipo
		}

		// pongo en hidden el confirmar nuevo y muestro el de edit y nuevo
		tr.find(".confirmar-nuevo-coche").addClass("d-none");
		tr.find(".editar-coche").removeClass("d-none");
		$(".nuevo-coche").removeClass("d-none");

		//pongo en disabled los inputs y quito select y muestro input de tipo
		tr.find("input").eq(0).val(tr.find("select option:selected").eq(0).text()); // setea el input
		tr.find("input").eq(0).removeClass("d-none");
		tr.find("select").eq(0).addClass("d-none");
		tr.find("input").each(function(){
			$(this).prop("disabled",true)
		})

		//api call
		carList.newCar(data);
	})

	//event delete car

	$(".modal-coches-container").on("click",".borrar-coche",function(){
		var carId = $(this).closest("tr").attr("data-id") * 1

		//delete car
		carList.deleteCar(carId);
	})



	// evento para mostrar ficheros de coche
	$(".modal-coches-container").on("click",".ficheros", function(){
		var carId = $(this).closest("tr").attr("data-id") * 1
		fileList.getFiles(carId);
	})


	//evento para descargar ficheros
	$(".modal-coches-container").on("click","#upload",function(){
		var carId = $(this).closest("div").attr("data-cards-car-id") * 1
		// ya tengo el id del coche
		// falta meter inputs para desplegar lo de upload, e inputs para meter el tipo y nombre
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