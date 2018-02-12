var fileListView = (function(){

	function renderFiles(data){

		$(".cards-container").remove();
		var html = Handlebars.templates.renderFilesTemplate(data);
		$("tr[data-id='"+data.carId+"']").after(html);

	}


	return{
		init:function(){
			events.subscribe("renderFiles",renderFiles)
		}
	}

})()

fileListView.init();