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

	function newFile(info){
		$.post(config.url+"nuevoFile.php",info,function(data){
				console.log("Fichero Insertado en la BBDD con id : ",data);

				//creo objeto fichero
				info.id = data;
				var fichero = File(info);

				//llamo a la vista para que itroduzca una nueva card de fichero
				fileList.getFiles(info.carId);
			})
	}


	function deleteFile(fileId,carId){
		$.post(config.url+"borrarFile.php",{id:fileId},function(data){
			
				//llamo a la vista para que QUITE el fichero volviendo a imprimir
				fileList.getFiles(carId);
			})
	}



	return {
		getFiles:getFiles,
		newFile:newFile,
		deleteFile:deleteFile
	}
})()