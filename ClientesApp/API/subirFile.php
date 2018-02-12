<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");


	
	if(is_uploaded_file($_FILES['myFile']['tmp_name'])){

		$nombreDirectorio = "uploadedFiles/";
		$nombreFicheroFinal = $nombreDirectorio . substr_replace($_FILES['myFile']['name'],'-'.time(),strpos($_FILES['myFile']['name'],'.'),0);

		if(is_dir($nombreDirectorio)){
			move_uploaded_file($_FILES['myFile']['tmp_name'], $nombreFicheroFinal);
			
			echo json_encode(array("ok"=>"Correcto","nombreFichero"=>substr_replace($_FILES['myFile']['name'],'-'.time(),strpos($_FILES['myFile']['name'],'.'),0)),JSON_FORCE_OBJECT);
			
			// aqui deberia hacer la inserción en la BBDD del fichero


		}else{
			echo "<br>Error en directorio";
		}

	}else{
		echo "<br>no se ha podido subir fichero";
	}





?>