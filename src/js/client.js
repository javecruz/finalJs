// var json = '{"cliente_id":3,"nombres":"pepe","ciudad":"valencia","alternativas":"m","telefono":"654654654","fecha_nacimiento":"222-111-333"}'
//var plainObject = {"cliente_id":3,"nombres":"pepe","ciudad":"valencia","alternativas":"m","telefono":"654654654","fecha_nacimiento":"222-111-333"}



var factory = function(){

	var createEmployee = function(json){

		return{
			cliente_id:json.id,
			nombres:json.nombres,
			ciudad:json.ciudad,
			alternativas:json.sexo,
			telefono:json.telefono,
			fecha_nacimiento:json.fechaNacimiento
			}
		}
	

	return{
		createNewEmployee:createEmployee
	}
		
}
		 

	

		 

	

