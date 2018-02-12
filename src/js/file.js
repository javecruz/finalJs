// var miCoche = {"id":6,"tipo":2,"matricula":"1232-HK","fecha_fabricacion":"2018-02-08","marca":"Ford","modelo":"escort","id_cliente":1}

var File = function(json){




		var id = json.id;
		var nombre = json.nombre; //coche = 1, moto = 2 , camión = 3, furgoneta = 4;
		var tipo = json.tipo;
		var id_vehiculo = json.idVehiculo;
	


		return{
			id:id,
			nombre:nombre,
			tipo:tipo,
			id_vehiculo:id_vehiculo		
			}

		}
	
		
