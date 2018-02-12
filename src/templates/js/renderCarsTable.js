(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['renderCarsTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">  \r\n\r\n              <th scope=\"row\" class=\"text-center\">"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</th>\r\n              <td class=\"text-center\">\r\n                <input class=\"text-center\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.tipo || (depth0 != null ? depth0.tipo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tipo","hash":{},"data":data}) : helper)))
    + "\" disabled>\r\n                <select class=\"select-tipo-coche text-center d-none\">\r\n                  <option class=\"text-center\" value=\"1\">Coche</option>\r\n                  <option class=\"text-center\" value=\"2\">Moto</option>\r\n                  <option class=\"text-center\" value=\"3\">Camion</option>\r\n                  <option class=\"text-center\" value=\"4\">Furgoneta</option>\r\n                </select>\r\n              </td>\r\n              <td class=\"text-center\"><input class=\"text-center\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.marca || (depth0 != null ? depth0.marca : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marca","hash":{},"data":data}) : helper)))
    + "\" disabled></td>\r\n              <td class=\"text-center\"><input class=\"text-center\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.modelo || (depth0 != null ? depth0.modelo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelo","hash":{},"data":data}) : helper)))
    + "\" disabled></td>\r\n              <td class=\"text-center\"><input class=\"text-center\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.matricula || (depth0 != null ? depth0.matricula : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"matricula","hash":{},"data":data}) : helper)))
    + "\" disabled></td>\r\n              <td class=\"text-center\"><input class=\"text-center\" type=\"date\" value=\""
    + alias4((helpers.setDateOnInput || (depth0 && depth0.setDateOnInput) || alias2).call(alias1,(depth0 != null ? depth0.fecha_fabricacion : depth0),{"name":"setDateOnInput","hash":{},"data":data}))
    + "\" disabled></td>\r\n              <td class=\"text-center\"><i class=\"fas fa-edit editar-coche\"></i><i class=\"fas fa-check-circle confirmar-editar-coche d-none\"></i></td>\r\n              <td class=\"text-center\"><i class=\"fas fa-trash-alt borrar-coche\"></i></td>\r\n              <td class=\"text-center\"><i class=\"fas fa-file-pdf ficheros\" data-toggle=\"collapse\" data-target=\"#ficheros-collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i></td>\r\n\r\n            </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal\" id=\"modalCoches\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog moreWidth\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-header\">\r\n          <h5 class=\"modal-title text-center\" id=\"exampleModalLabel\">Coches del Usuario  : "
    + alias4(((helper = (helper = helpers.nombre || (depth0 != null ? depth0.nombre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data}) : helper)))
    + "</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n          \r\n        <i class=\"fas fa-plus-circle nuevo-coche\"></i>\r\n        <table class=\"table tabla-Coches\" data-id-cliente=\""
    + alias4(((helper = (helper = helpers.id_cliente || (depth0 != null ? depth0.id_cliente : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_cliente","hash":{},"data":data}) : helper)))
    + "\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"text-center\">#</th>\r\n              <th class=\"text-center\">Tipo</th>\r\n              <th class=\"text-center\">Marca</th>\r\n              <th class=\"text-center\">Modelo</th>\r\n              <th class=\"text-center\">Matrícula</th>\r\n              <th class=\"text-center\">Fecha Fabricación</th>\r\n              <th class=\"text-center\">Editar</th>\r\n              <th class=\"text-center\">Borrar</th>\r\n              <th class=\"text-center\">Ficheros</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.coches : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n          </tbody>\r\n        </table>\r\n                                  \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                    \r\n                                                                        \r\n\r\n                 ";
},"useData":true});
})();