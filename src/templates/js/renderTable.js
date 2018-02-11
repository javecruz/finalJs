(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['renderTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<tr class=\""
    + alias4(((helper = (helper = helpers.cliente_id || (depth0 != null ? depth0.cliente_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cliente_id","hash":{},"data":data}) : helper)))
    + "\">\r\n					<th class=\"text-center\" scope='row'>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</th>\r\n					<td class=\"text-center\">"
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + "</td>\r\n					<td class=\"text-center\">"
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "</td>\r\n					<td class=\"text-center\">"
    + alias4(((helper = (helper = helpers.alternativas || (depth0 != null ? depth0.alternativas : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alternativas","hash":{},"data":data}) : helper)))
    + "</td>\r\n					<td class=\"text-center\">"
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "</td>\r\n					<td class=\"text-center\">"
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.fecha_nacimiento : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\r\n					<td class=\"text-center\">"
    + alias4(((helper = (helper = helpers.direccion || (depth0 != null ? depth0.direccion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"direccion","hash":{},"data":data}) : helper)))
    + "</td>\r\n					<td class=\"text-center\">"
    + alias4(((helper = (helper = helpers.provincia || (depth0 != null ? depth0.provincia : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"provincia","hash":{},"data":data}) : helper)))
    + "</td>\r\n					<td class=\"text-center\">"
    + alias4(((helper = (helper = helpers.fechaAlta || (depth0 != null ? depth0.fechaAlta : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fechaAlta","hash":{},"data":data}) : helper)))
    + "</td>\r\n					<td class=\"text-center\"><i class=\"fas fa-edit editar\" data-toggle=\"modal\" data-target=\"#exampleModal\"></i></td>\r\n					<td class=\"text-center\"><i class=\"fas fa-trash-alt borrar\"></i></td>\r\n					<td class=\"text-center\"><i class=\"fas fa-globe mapa\" data-toggle=\"modal\" data-target=\"#modalMap\"></i></td>\r\n                    <td class=\"text-center\"><i class=\"fas fa-car coches\"></i></td>\r\n				</tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr>\r\n                <th scope=\"row\" class=\"text-center\">"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</th>\r\n                <td colspan=\"2\" class=\"text-center font-weight-bold\">"
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-center font-weight-bold\">Ciudad</td>\r\n                <td colspan=\"2\" class=\"text-center\">"
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-center font-weight-bold\">Sexo</td>\r\n                <td colspan=\"2\" class=\"text-center\">"
    + alias4(((helper = (helper = helpers.alternativas || (depth0 != null ? depth0.alternativas : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alternativas","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-center font-weight-bold\">Teléfono</td>\r\n                <td colspan=\"2\" class=\"text-center\">"
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-center font-weight-bold\">F.Nacimiento.</td>\r\n                <td colspan=\"2\" class=\"text-center\">"
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.fecha_nacimiento : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-center font-weight-bold\">Dirección</td>\r\n                <td colspan=\"2\" class=\"text-center\">"
    + alias4(((helper = (helper = helpers.direccion || (depth0 != null ? depth0.direccion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"direccion","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-center font-weight-bold\">Provincia</td>\r\n                <td colspan=\"2\" class=\"text-center\">"
    + alias4(((helper = (helper = helpers.provincia || (depth0 != null ? depth0.provincia : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"provincia","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-center font-weight-bold\">Alta</td>\r\n                <td colspan=\"2\" class=\"text-center\">"
    + alias4(((helper = (helper = helpers.fechaAlta || (depth0 != null ? depth0.fechaAlta : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fechaAlta","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n            <tr  class=\""
    + alias4(((helper = (helper = helpers.cliente_id || (depth0 != null ? depth0.cliente_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cliente_id","hash":{},"data":data}) : helper)))
    + "\">\r\n                <td class=\"text-center\">\r\n                    <i class=\"fas fa-edit editar\" data-toggle=\"modal\" data-target=\"#exampleModal\"></i>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <i class=\"fas fa-trash-alt borrar\"></i>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <i class=\"fas fa-globe mapa\" data-toggle=\"modal\" data-target=\"#modalMap\"></i>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"3\" class=\"bg-danger\"></td>\r\n            </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"output d-none d-lg-block\">\r\n    <i class=\"fas fa-plus-circle nuevo\" data-toggle=\"modal\" data-target=\"#exampleModal\"></i>\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th class=\"text-center\">#</th>\r\n                <th class=\"text-center\">Nombre</th>\r\n                <th class=\"text-center\">Ciudad</th>\r\n                <th class=\"text-center\">Sexo</th>\r\n                <th class=\"text-center\">Telefono</th>\r\n                <th class=\"text-center\">Fecha Nacimiento</th>\r\n                <th class=\"text-center\">Dirección</th>\r\n                <th class=\"text-center\">Provincia</th>\r\n                <th class=\"text-center\">Fecha Alta</th>\r\n                <th class=\"text-center\">Editar</th>\r\n                <th class=\"text-center\">Borrar</th>\r\n                <th class=\"text-center\">Localización</th>\r\n                <th class=\"text-center\">Coches</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class=\"datosTabla\">\r\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</tbody>\r\n    </table>\r\n</div>\r\n\r\n\r\n\r\n\r\n <div class=\"output-mobile d-block d-lg-none\">\r\n    <i class=\"fas fa-plus-circle nuevo fixed-top\" data-toggle=\"modal\" data-target=\"#exampleModal\"></i>\r\n    <table class=\"table\">\r\n        <tbody class=\"datosTablaMobile\">\r\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\r\n    </table>\r\n</div>";
},"useData":true});
})();