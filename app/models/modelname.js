import DS from "ember-data";
import { Model } from 'ember-pouch';

var Modelname = Model.extend({
	name: DS.attr('string', {defaultValue: ""}),
	pages: DS.hasMany('page', {async: true})
});

export default Modelname;