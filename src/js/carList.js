var carList = (function(){



	function getCars(idCliente){

		$.post(config.url+"consultaCoches.php",{idCliente:idCliente},

			function(data){
				var arrayCars = []; // no lo abro publico pues solo quiero mantener los coches de 1 solo cliente en el array
				data.forEach(function(element, index){
					arrayCars[index] = Car(element);
				})

				var index = clientList.getClientFromArray(idCliente);

				var dataPublish = {
					coches:arrayCars,
					nombre:clientList.arrayClients[index].nombres,
					id_cliente:idCliente
				}
				
				//publish que rellena el modal
				events.publish("renderCarsTable",dataPublish)
			},"json"
			)

	}

	function update(carJson){

		$.post(config.url +"modificaCoche.php",carJson,function(data){
			if(data.ok != undefined){
				console.log("Coche modificado");	
			}else{
				console.log("error modificar coche");
			}
			
		},"json")
	}

	function nuevo(carJson){

		$.post(config.url +"nuevoCoche.php",carJson,function(data){
			if(data.id != undefined){
				console.log("Coche insertado con id = " + data.id);

				// EL SIGUIENTE FIX NO DEBERIA IR AQUI, preguntar a NACHO
				//esto lo que hacee es meter la ID del coche que se ACABA de insertar, hay problemas si le doy a nuevo muchas veces...y luego confirmo
				$(".tabla-Coches").find("tr").last().attr("data-id",data.id)


			}else{
				console.log("error modificar coche");
			}
			
		},"json")

	}

	function deleteCar(id){

		$.post(config.url +"deleteCar.php",{id:id},function(data){
			if(data.ok != undefined){

				console.log("Coche eliminado con id = " + data.id);
				// borro el tr del coche en la tabla
				$("tr[data-id='"+id+"']").remove();

			}else{
				console.log("error al eliminar coche");
			}
			
		},"json")
	}



	return{
		getCars:getCars,
		update:update,
		newCar:nuevo,
		deleteCar:deleteCar
	}
})()