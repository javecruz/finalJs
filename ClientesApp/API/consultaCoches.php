<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
require_once('include_dao.php');


	//start new transaction
	$transaction = new Transaction();
	//obtain clienteDAOFactory
	$VehiculoDAO=DAOFactory::getVehiculosDAO();
	//obtain clientes
	$coches=$VehiculoDAO->load($_POST['idCliente']);
	//commit transaction
	$transaction->commit();

	echo json_encode($coches);

?>