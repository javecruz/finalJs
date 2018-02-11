var carList = (function(){



	function getCars(idCliente){

		$.post(config.url+"consultaCoches.php",{idCliente:idCliente},

			function(data){
				var arrayCars = []; // no lo abro publico pues solo quiero mantener los coches de 1 solo cliente en el array
				data.forEach(function(element, index){
					arrayCars[index] = Car(element);
				})

				var index = clientList.getClientFromArray(idCliente);

				// var dataPublish = {
				// 	coches:arrayCars,
				// 	nombre:clientList.arrayClients[index].nombres
				// }
				
				//publish que rellena el modal
				events.publish("renderCarsTable",arrayCars)
			},"json"
			)

	}



	return{
		getCars:getCars
	}
})()