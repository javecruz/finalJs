var clientListView = (function(){

	function renderTable(clientArray){
			var HTML = Handlebars.templates.renderTable(clientArray);
			$(".datosTabla").html(HTML);
	}



	return {
		init:function(){
			events.subscribe("renderTable",renderTable)
		}
	}
}())

clientListView.init();