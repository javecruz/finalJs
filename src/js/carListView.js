var carListView = (function(){



	function showCars(data){
		/*
			data = {
				nombre:"Nombre del Cliente",
				id_cliente:"id del cliente",
				coches:"array de coches del cliente"
			}
		*/
			var HTML = Handlebars.templates.renderCarsTable(data);
			$(".modal-coches-container").html(HTML);
			$('#modalCoches').modal('show');  // sin esto el modal se queda gris, no entiendo por qué, pues el modal de nuevo cliente, mapa.. todos siguenn la misma estructura y funcionan... pero este no..
	}



	return{
		init:function(){
			events.subscribe("renderCarsTable", showCars);
		}
	}
})()


carListView.init();
