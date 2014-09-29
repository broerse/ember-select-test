import DS from "ember-data";

var Modelname = DS.Model.extend({
	rev: DS.attr('string'),
	name: DS.attr('string', {defaultValue: ""}),
	pages: DS.hasMany('page', {async: true})
});

export default Modelname;