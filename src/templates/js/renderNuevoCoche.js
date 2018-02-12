(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['renderNuevoCoche'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\r\n<tr data-id=\"\">                                        \r\n  <th scope=\"row\" class=\"text-center\">"
    + container.escapeExpression(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"num","hash":{},"data":data}) : helper)))
    + "</th>\r\n  <td class=\"text-center\">\r\n    <input class=\"text-center d-none\" type=\"text\" value=\"\" style=\"width:100px\" disabled>\r\n    <select class=\"select-tipo-coche text-center\" style=\"width:100px\">\r\n      <option class=\"text-center\" value=\"1\">Coche</option>\r\n      <option class=\"text-center\" value=\"2\">Moto</option>\r\n      <option class=\"text-center\" value=\"3\">Camion</option>\r\n      <option class=\"text-center\" value=\"4\">Furgoneta</option>\r\n    </select>\r\n  </td>\r\n  <td class=\"text-center\"><input class=\"text-center\" type=\"text\" value=\"\" style=\"width:100px\"></td>\r\n  <td class=\"text-center\"><input class=\"text-center\" type=\"text\" value=\"\" style=\"width:100px\"></td>\r\n  <td class=\"text-center\"><input class=\"text-center\" type=\"text\" value=\"\" style=\"width:100px\"></td>\r\n  <td class=\"text-center\"><input class=\"text-center\" type=\"date\" value=\"\" style=\"width:150px\"></td>\r\n  <td class=\"text-center\"><i class=\"fas fa-plus-circle confirmar-nuevo-coche\"></i><i class=\"fas fa-edit editar-coche d-none\"></i><i class=\"fas fa-check-circle confirmar-editar-coche d-none\"></i></td>\r\n  <td class=\"text-center\"><i class=\"fas fa-trash-alt borrar-coche\"></i></td>\r\n  <td class=\"text-center\"><i class=\"fas fa-file-pdf ficheros\"></i></td> \r\n                              \r\n</tr>";
},"useData":true});
})();