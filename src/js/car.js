
// var miCoche = {"id":6,"tipo":2,"matricula":"1232-HK","fecha_fabricacion":"2018-02-08","marca":"Ford","modelo":"escort","id_cliente":1}

var Car = function(json){




		var id = json.id;
		var tipo = json.tipo; //coche = 1, moto = 2 , camión = 3, furgoneta = 4;
		var matricula = json.matricula;
		var fecha_fabricacion = json.fechaFabricacion;
		var marca = json.marca;
		var modelo = json.modelo;
		var id_cliente = json.idCliente;


		return{
			id:id,
			modelo:modelo,
			matricula:matricula,
			fecha_fabricacion:fecha_fabricacion,
			marca:marca,
			tipo:(function(){
				return tipo == 1 ? "Coche" : tipo == 2 ? "Moto" : tipo == 3 ? "Camión" : tipo == 4 ? "Furgoneta" : undefined;  
			})(),
			id_cliente:id_cliente			
			}

		}
	
		
