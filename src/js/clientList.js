var clientList = (function(){

	var employeeMaker = factory();
	var arrayClients = [];


	function getIndexClientFromArray(id){

		for(var i = 0; i<arrayClients.length;i++){
			if(arrayClients[i].cliente_id == id){
				return i;
			}
		}
		
	}


		//cargo todos los clientes de la bbdd
	function loadClientsFromServer(){
		$.post(config.url+"consulta.php",
			function(data){

				for(cliente in data){
					arrayClients.push(employeeMaker.createNewEmployee(data[cliente]));
				}

				events.publish("renderTable",arrayClients)
				
			},"json"
			)
	}


	function addNewClient(clientJson){

		clientJson.submit = "1";
		
		$.post(config.url+"nuevo.php",clientJson,function(data){

			 if(data.cliente != undefined){
			 	var nuevo = employeeMaker.createNewEmployee(data.cliente)
				arrayClients.push(nuevo)
				events.publish("renderTable",arrayClients)
				console.log("insertado");
			 }else{
			 	console.log("error");
			 }

			//poniendo el "json" me devuelve array con TODOS los clientes, en teoria es el ultimo
			
			

		},"json")
	
	}

	function updateClient(clientJson){
		
		clientJson.submit = "1";

		// devuelve json plano ok:1
		$.post(config.url+"actualizar.php",clientJson,function(data){
			//se ha actualizado, procedo a modificar el array con el cliente modificado
			if(data.ok != undefined){
				var index = getIndexClientFromArray(clientJson.cliente_id)

			arrayClients[index].nombres = clientJson.nombres;
			arrayClients[index].ciudad = clientJson.ciudad;
			arrayClients[index].alternativas = clientJson.alternativas;
			arrayClients[index].fecha_nacimiento = clientJson.fecha_nacimiento;
			arrayClients[index].telefono = clientJson.telefono;

			events.publish("renderTable",arrayClients)
		}else{
			console.log("error al insertar");
		}
			

		},"json")
		
	}

	function deleteClient(id){

		//espera un $_POST['id']
		$.post(config.url+"eliminar.php",{id:id},function(){
			$("#"+id).remove();
			var index = getIndexClientFromArray(id);
			arrayClients.splice(index,1);
		})
	}


	return {
		loadClientsFromServer:loadClientsFromServer,
		deleteClient:deleteClient,
		updateClient:updateClient,
		addNewClient:addNewClient,
		arrayClients:arrayClients,
		getClientFromArray:getIndexClientFromArray
	}
}())