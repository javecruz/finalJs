<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
require_once('include_dao.php');


	//start new transaction
	$transaction = new Transaction();
	//obtain clienteDAOFactory
	$FicheroDAO=DAOFactory::getFicherosDAO();
	//obtain clientes
	$ficheros=$FicheroDAO->queryByIdVehiculo($_POST['id_Coche']);
	//commit transaction
	$transaction->commit();

	echo json_encode($ficheros);

?>