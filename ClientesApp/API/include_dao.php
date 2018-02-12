<?php
	//include all DAO files
	require_once('class/sql/Connection.class.php');
	require_once('class/sql/ConnectionFactory.class.php');
	require_once('class/sql/ConnectionProperty.class.php');
	require_once('class/sql/QueryExecutor.class.php');
	require_once('class/sql/Transaction.class.php');
	require_once('class/sql/SqlQuery.class.php');
	require_once('class/core/ArrayList.class.php');
	require_once('class/dao/DAOFactory.class.php');
 	
	require_once('class/dao/ClienteDAO.class.php');
	require_once('class/dto/Cliente.class.php');
	require_once('class/mysql/ClienteMySqlDAO.class.php');
	require_once('class/mysql/ext/ClienteMySqlExtDAO.class.php');
	require_once('class/dao/FicherosDAO.class.php');
	require_once('class/dto/Fichero.class.php');
	require_once('class/mysql/FicherosMySqlDAO.class.php');
	require_once('class/mysql/ext/FicherosMySqlExtDAO.class.php');
	require_once('class/dao/VehiculosDAO.class.php');
	require_once('class/dto/Vehiculo.class.php');
	require_once('class/mysql/VehiculosMySqlDAO.class.php');
	require_once('class/mysql/ext/VehiculosMySqlExtDAO.class.php');

?>