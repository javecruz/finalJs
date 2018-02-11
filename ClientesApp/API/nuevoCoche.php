<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
//require('functions.php');


	//include all DAO files
	require_once('include_dao.php');
	//new cliente
	$vehiculo=new Vehiculo();	
	$vehiculo->matricula = htmlspecialchars(trim($_POST['matricula']));
	$vehiculo->fechaFabricacion = htmlspecialchars(trim($_POST['fechaFabricacion']));
	$vehiculo->marca = htmlspecialchars(trim($_POST['marca']));
	$vehiculo->modelo = htmlspecialchars(trim($_POST['modelo']));
	$vehiculo->idCliente = htmlspecialchars(trim($_POST['idCliente']));
	$vehiculo->tipo = htmlspecialchars(trim($_POST['tipo']));

	//start new transaction
	$transaction = new Transaction();
	//obtain clienteDAOFactory
	$VehiculoDAO=DAOFactory::getVehiculosDAO();
	//update cliente
	$id=$VehiculoDAO->insert($vehiculo);
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