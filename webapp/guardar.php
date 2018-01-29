<?
//echo $_GET['tipo'];
$falla= $_GET['falla'];
$puntos= $_GET['puntos'];
$device= $_GET['device'];
class DBManager{
	var $conect;
  
	var $BaseDatos;
	var $Servidor;
	var $Usuario;
	var $Clave;
	function DBManager(){
		$this->BaseDatos = "u155863199_falla";
		$this->Servidor = "mysql.nixiweb.com";
		$this->Usuario = "u155863199_falla";
		$this->Clave = "13k6g50";
	}

	 function conectar() {
		if(!($con=@mysql_connect($this->Servidor,$this->Usuario,$this->Clave))){
			echo"<h1> [:(] Error al conectar a la base de datos</h1>";	
			exit();
		}
		if (!@mysql_select_db($this->BaseDatos,$con)){
			echo "<h1> [:(] Error al seleccionar la base de datos</h1>";  
			exit();
		}
		$this->conect=$con;
		return true;	
	}
}
$con=new DBManager;
function obtenerpuntuacion($con,$device,$falla){
		if($con->conectar()==true){
			return mysql_query("SELECT * FROM puntos WHERE device='".$device."' AND falla=".$falla);
		}
}
function guardarpuntuacion($con,$device,$falla,$puntos){
		if($con->conectar()==true){
			return mysql_query("INSERT INTO puntos (device, falla, puntos) VALUES ('".$device."', '".$falla."','".$puntos."')");
		}
}

if( obtenerpuntuacion($con,$device,$falla)){
	
	if(!guardarpuntuacion($con,$device,$falla,$puntos)) {
		echo $device;
		exit (1);
	}else  echo 1;
}
echo 1;
//echo $_GET['device'];
?>