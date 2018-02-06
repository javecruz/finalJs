<?php
/**
 * Intreface DAO
 *
 * @author: http://phpdao.com
 * @date: 2018-02-06 16:38
 */
interface VehiculosDAO{

	/**
	 * Get Domain object by primry key
	 *
	 * @param String $id primary key
	 * @Return Vehiculos 
	 */
	public function load($id);

	/**
	 * Get all records from table
	 */
	public function queryAll();
	
	/**
	 * Get all records from table ordered by field
	 * @Param $orderColumn column name
	 */
	public function queryAllOrderBy($orderColumn);
	
	/**
 	 * Delete record from table
 	 * @param vehiculo primary key
 	 */
	public function delete($id);
	
	/**
 	 * Insert record to table
 	 *
 	 * @param Vehiculos vehiculo
 	 */
	public function insert($vehiculo);
	
	/**
 	 * Update record in table
 	 *
 	 * @param Vehiculos vehiculo
 	 */
	public function update($vehiculo);	

	/**
	 * Delete all rows
	 */
	public function clean();

	public function queryByMatricula($value);

	public function queryByFechaFabricacion($value);

	public function queryByMarca($value);

	public function queryByModelo($value);

	public function queryByIdCliente($value);


	public function deleteByMatricula($value);

	public function deleteByFechaFabricacion($value);

	public function deleteByMarca($value);

	public function deleteByModelo($value);

	public function deleteByIdCliente($value);


}
?>