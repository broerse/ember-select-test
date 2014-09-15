import DS from "ember-data";

var Page = DS.Model.extend({
	title: DS.attr('string', {defaultValue: ""}),
	date: DS.attr('date'),
	body: DS.attr('string', {defaultValue: ""}),
	rev: DS.attr('string'),
	modelname: DS.attr('string', {defaultValue: ""})
});

export default Page;