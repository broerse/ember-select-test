import DS from "ember-data";

var Page = DS.Model.extend({
	rev: DS.attr('string'),
	title: DS.attr('string', {defaultValue: ""}),
	date: DS.attr('date'),
	body: DS.attr('string', {defaultValue: ""}),
	mname: DS.belongsTo('modelname', {async: true})
});

export default Page;