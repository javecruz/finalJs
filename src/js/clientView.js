var clientView = (function(){



	function renderClient(data){
		/*EJEMPLO data
			{
				titulo:titulo,
				opcion_confirmar:opcion,
				cliente:clientObject
			}
		*/
			var HTML = Handlebars.templates.modal(data);

			$(".modal-container").html(HTML);
	}

	return {
		init:function(){
			events.subscribe("renderClient",renderClient)
		}

		// te hace falta meter el publish nada más ejecutar el documento, aunque luego no se muestre... pero hace falta
	}
}())

clientView.init();  