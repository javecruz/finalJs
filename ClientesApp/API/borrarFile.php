<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
//require('functions.php');


	if(isset($_POST['id'])){

		require_once('include_dao.php');
	//new cliente


	//start new transaction
	$transaction = new Transaction();
	//obtain clienteDAOFactory
	$FicheroDAO=DAOFactory::getFicherosDAO();
	//update cliente
	$update=$FicheroDAO->delete($_POST['id']);
	//commit transaction
	$transaction->commit();
//echo json_encode($clientes, JSON_FORCE_OBJECT);

	if ( $update >0){
    	//require('consulta_inc.php');
    	echo json_encode(array("ok"=>"Registro Eliminado"), JSON_FORCE_OBJECT);
	}else{
		echo json_encode(array("error"=>"Nuevo:Se produjo un error. Intente más tarde"), JSON_FORCE_OBJECT);
	} 
	}
	
	


?>