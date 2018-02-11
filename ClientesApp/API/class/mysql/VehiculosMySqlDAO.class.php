<?php
/**
 * Class that operate on table 'vehiculos'. Database Mysql.
 *
 * @author: http://phpdao.com
 * @date: 2018-02-11 18:12
 */
class VehiculosMySqlDAO implements VehiculosDAO{

	/**
	 * Get Domain object by primry key
	 *
	 * @param String $id primary key
	 * @return VehiculosMySql 
	 */
	public function load($id){
		$sql = 'SELECT * FROM vehiculos WHERE id_cliente = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->setNumber($id);
		return $this->getList($sqlQuery);
		// return $this->getRow($sqlQuery);
	}

	/**
	 * Get all records from table
	 */
	public function queryAll(){
		$sql = 'SELECT * FROM vehiculos';
		$sqlQuery = new SqlQuery($sql);
		return $this->getList($sqlQuery);
	}
	
	/**
	 * Get all records from table ordered by field
	 *
	 * @param $orderColumn column name
	 */
	public function queryAllOrderBy($orderColumn){
		$sql = 'SELECT * FROM vehiculos ORDER BY '.$orderColumn;
		$sqlQuery = new SqlQuery($sql);
		return $this->getList($sqlQuery);
	}
	
	/**
 	 * Delete record from table
 	 * @param vehiculo primary key
 	 */
	public function delete($id){
		$sql = 'DELETE FROM vehiculos WHERE id = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->setNumber($id);
		return $this->executeUpdate($sqlQuery);
	}
	
	/**
 	 * Insert record to table
 	 *
 	 * @param VehiculosMySql vehiculo
 	 */
	public function insert($vehiculo){
		$sql = 'INSERT INTO vehiculos (matricula, fecha_fabricacion, marca, modelo, id_cliente, Tipo) VALUES (?, ?, ?, ?, ?, ?)';
		$sqlQuery = new SqlQuery($sql);
		
		$sqlQuery->set($vehiculo->matricula);
		$sqlQuery->set($vehiculo->fechaFabricacion);
		$sqlQuery->set($vehiculo->marca);
		$sqlQuery->set($vehiculo->modelo);
		$sqlQuery->setNumber($vehiculo->idCliente);
		$sqlQuery->setNumber($vehiculo->tipo);

		$id = $this->executeInsert($sqlQuery);	
		$vehiculo->id = $id;
		return $id;
	}
	
	/**
 	 * Update record in table
 	 *
 	 * @param VehiculosMySql vehiculo
 	 */
	public function update($vehiculo){
		$sql = 'UPDATE vehiculos SET matricula = ?, fecha_fabricacion = ?, marca = ?, modelo = ?, id_cliente = ?, Tipo = ? WHERE id = ?';
		$sqlQuery = new SqlQuery($sql);
		
		$sqlQuery->set($vehiculo->matricula);
		$sqlQuery->set($vehiculo->fechaFabricacion);
		$sqlQuery->set($vehiculo->marca);
		$sqlQuery->set($vehiculo->modelo);
		$sqlQuery->setNumber($vehiculo->idCliente);
		$sqlQuery->setNumber($vehiculo->tipo);

		$sqlQuery->setNumber($vehiculo->id);
		return $this->executeUpdate($sqlQuery);
	}

	/**
 	 * Delete all rows
 	 */
	public function clean(){
		$sql = 'DELETE FROM vehiculos';
		$sqlQuery = new SqlQuery($sql);
		return $this->executeUpdate($sqlQuery);
	}

	public function queryByMatricula($value){
		$sql = 'SELECT * FROM vehiculos WHERE matricula = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->set($value);
		return $this->getList($sqlQuery);
	}

	public function queryByFechaFabricacion($value){
		$sql = 'SELECT * FROM vehiculos WHERE fecha_fabricacion = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->set($value);
		return $this->getList($sqlQuery);
	}

	public function queryByMarca($value){
		$sql = 'SELECT * FROM vehiculos WHERE marca = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->set($value);
		return $this->getList($sqlQuery);
	}

	public function queryByModelo($value){
		$sql = 'SELECT * FROM vehiculos WHERE modelo = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->set($value);
		return $this->getList($sqlQuery);
	}

	public function queryByIdCliente($value){
		$sql = 'SELECT * FROM vehiculos WHERE id_cliente = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->setNumber($value);
		return $this->getList($sqlQuery);
	}

	public function queryByTipo($value){
		$sql = 'SELECT * FROM vehiculos WHERE Tipo = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->setNumber($value);
		return $this->getList($sqlQuery);
	}


	public function deleteByMatricula($value){
		$sql = 'DELETE FROM vehiculos WHERE matricula = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->set($value);
		return $this->executeUpdate($sqlQuery);
	}

	public function deleteByFechaFabricacion($value){
		$sql = 'DELETE FROM vehiculos WHERE fecha_fabricacion = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->set($value);
		return $this->executeUpdate($sqlQuery);
	}

	public function deleteByMarca($value){
		$sql = 'DELETE FROM vehiculos WHERE marca = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->set($value);
		return $this->executeUpdate($sqlQuery);
	}

	public function deleteByModelo($value){
		$sql = 'DELETE FROM vehiculos WHERE modelo = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->set($value);
		return $this->executeUpdate($sqlQuery);
	}

	public function deleteByIdCliente($value){
		$sql = 'DELETE FROM vehiculos WHERE id_cliente = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->setNumber($value);
		return $this->executeUpdate($sqlQuery);
	}

	public function deleteByTipo($value){
		$sql = 'DELETE FROM vehiculos WHERE Tipo = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->setNumber($value);
		return $this->executeUpdate($sqlQuery);
	}


	
	/**
	 * Read row
	 *
	 * @return VehiculosMySql 
	 */
	protected function readRow($row){
		$vehiculo = new Vehiculo();
		
		$vehiculo->id = $row['id'];
		$vehiculo->matricula = $row['matricula'];
		$vehiculo->fechaFabricacion = $row['fecha_fabricacion'];
		$vehiculo->marca = $row['marca'];
		$vehiculo->modelo = $row['modelo'];
		$vehiculo->idCliente = $row['id_cliente'];
		$vehiculo->tipo = $row['Tipo'];

		return $vehiculo;
	}
	
	protected function getList($sqlQuery){
		$tab = QueryExecutor::execute($sqlQuery);
		$ret = array();
		for($i=0;$i<count($tab);$i++){
			$ret[$i] = $this->readRow($tab[$i]);
		}
		return $ret;
	}
	
	/**
	 * Get row
	 *
	 * @return VehiculosMySql 
	 */
	protected function getRow($sqlQuery){
		$tab = QueryExecutor::execute($sqlQuery);
		if(count($tab)==0){
			return null;
		}
		return $this->readRow($tab[0]);		
	}
	
	/**
	 * Execute sql query
	 */
	protected function execute($sqlQuery){
		return QueryExecutor::execute($sqlQuery);
	}
	
		
	/**
	 * Execute sql query
	 */
	protected function executeUpdate($sqlQuery){
		return QueryExecutor::executeUpdate($sqlQuery);
	}

	/**
	 * Query for one row and one column
	 */
	protected function querySingleResult($sqlQuery){
		return QueryExecutor::queryForString($sqlQuery);
	}

	/**
	 * Insert row to table
	 */
	protected function executeInsert($sqlQuery){
		return QueryExecutor::executeInsert($sqlQuery);
	}
}
?>