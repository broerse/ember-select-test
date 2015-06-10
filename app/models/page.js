import DS from "ember-data";
import { Model } from 'ember-pouch';

var Page = Model.extend({
	title: DS.attr('string', {defaultValue: ""}),
	date: DS.attr('date'),
	body: DS.attr('string', {defaultValue: ""}),
	mname: DS.belongsTo('modelname', {async: true})
});

export default Page;