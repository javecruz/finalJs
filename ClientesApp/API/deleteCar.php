<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");

$cocheId=$_POST['id'];
//include all DAO files
require_once('include_dao.php');		
//start new transaction
$transaction = new Transaction();
//obtain clienteDAOFactory
$VehiculoDAO=DAOFactory::getVehiculosDAO();
//obtain clientes
$update=$VehiculoDAO->delete($cocheId);//devuelve el numero de registros afectados en el update
//commit transaction
$transaction->commit();

if( $update>0){
	echo json_encode(array("ok"=>"Registro Eliminado"), JSON_FORCE_OBJECT);
}else{
	echo "Eliminar: Ocurrio un error";
}

?>