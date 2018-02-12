<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
//require('functions.php');


	//include all DAO files
	require_once('include_dao.php');
	//new cliente
	$fichero=new Fichero();	
	$fichero->tipo = htmlspecialchars(trim($_POST['tipo']));
	$fichero->nombre = htmlspecialchars(trim($_POST['nombre']));
	$fichero->idVehiculo = htmlspecialchars(trim($_POST['carId']));


	//start new transaction
	$transaction = new Transaction();
	//obtain clienteDAOFactory
	$FicheroDAO=DAOFactory::getFicherosDAO();
	//update cliente
	$id=$FicheroDAO->insert($fichero);
	//commit transaction
	$transaction->commit();
//echo json_encode($clientes, JSON_FORCE_OBJECT);

	if ( $id >0){
    	//require('consulta_inc.php');
    	echo json_encode(array("id"=>$id), JSON_FORCE_OBJECT);
	}else{
		echo json_encode(array("error"=>"Nuevo:Se produjo un error. Intente más tarde"), JSON_FORCE_OBJECT);
	} 


?>