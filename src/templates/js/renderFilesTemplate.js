(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['renderFilesTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n    <div class=\"card\" data-file-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title text-center\">"
    + alias4(((helper = (helper = helpers.nombre || (depth0 != null ? depth0.nombre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data}) : helper)))
    + "</h4>\r\n        <h2 class=\"text-center\">"
    + alias4(((helper = (helper = helpers.tipo || (depth0 != null ? depth0.tipo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tipo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n        <h2 class=\"text-center\">"
    + alias4(((helper = (helper = helpers.id_vehiculo || (depth0 != null ? depth0.id_vehiculo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_vehiculo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n\r\n        <a href=\"http://localhost/finalJs/ClientesApp/API/uploadedFiles/"
    + alias4(((helper = (helper = helpers.nombre || (depth0 != null ? depth0.nombre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary\" download>Download</a>\r\n        <a href=\"#!\" class=\"btn btn-primary eliminarFichero\">Delete File</a>\r\n\r\n      </div>\r\n    </div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<div class=\"cards-container\" data-cards-car-id=\""
    + container.escapeExpression(((helper = (helper = helpers.carId || (depth0 != null ? depth0.carId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"carId","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n<i class=\"fas fa-upload subir-fichero-form\"></i>\r\n\r\n<div class=\"container-form-new-file d-none\">\r\n\r\n  <h1 class=\"font-weight-bold\">SUBIR ARCHIVO</h1>\r\n  <h3>Tipo de Archivo</h3>\r\n\r\n  <select class=\"select-tipo-file text-center\">\r\n    <option class=\"text-center\" value=\"Seguro\">Seguro</option>\r\n    <option class=\"text-center\" value=\"Contrato\">Contrato</option>\r\n    <option class=\"text-center\" value=\"Alta\">Alta</option>\r\n    <option class=\"text-center\" value=\"Baja\">Baja</option>\r\n    <option class=\"text-center\" value=\"Incidencia\">Incidencia</option>\r\n  </select><br>\r\n\r\n  <input type=\"file\" id=\"myFile\" name=\"myFile\"><br>\r\n  <input type=\"button\" id=\"upload\" value=\"Upload\"><br>\r\n  <progress id=\"prog\" value=\"0\" min=\"0\" max=\"100\"></progress>\r\n</div>\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.arrayFiles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n</div>";
},"useData":true});
})();