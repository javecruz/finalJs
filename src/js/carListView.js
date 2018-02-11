var carListView = (function(){



	function showCars(data){
		/*
			data = {
				nombre:"Nombre del Cliente",
				coches:"array de coches del cliente"
			}
		*/
			var HTML = Handlebars.templates.renderCarsTable(data);
			$(".modal-coches-container").html(HTML);
	}


	return{
		init:function(){
			events.subscribe("renderCarsTable", showCars);
		}
	}
})()


carListView.init();
