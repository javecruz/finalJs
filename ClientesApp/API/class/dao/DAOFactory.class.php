<?php

/**
 * DAOFactory
 * @author: http://phpdao.com
 * @date: ${date}
 */
class DAOFactory{
	
	/**
	 * @return ClienteDAO
	 */
	public static function getClienteDAO(){
		return new ClienteMySqlExtDAO();
	}

	/**
	 * @return VehiculosDAO
	 */
	public static function getVehiculosDAO(){
		return new VehiculosMySqlExtDAO();
	}


}
?>