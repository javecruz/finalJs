var fileList = (function(){

	

	function getFiles(carId){

		$.post(config.url + "consultaFicheros.php",{id_Coche:carId},function(data){
			var arrayFiles = [];
			
			data.forEach(function(element, index){
					arrayFiles[index] = File(element);
				})
			//llamo a la vista enviaandole los archivos
			var dataFiles = {
				carId:carId, //necesito pasarsle esto en el caso de que intente cargar un coche que no tiene ficheros..
				arrayFiles:arrayFiles
			}
			events.publish("renderFiles",dataFiles);
		},"json")
	}



	return {
		getFiles:getFiles
	}
})()