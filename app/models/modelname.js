import DS from "ember-data";
import { Model } from 'ember-pouch';

var Modelname = Model.extend({
	name: DS.attr('string', {defaultValue: ""}),
	pages: DS.hasMany('page', {serialize: true})
});

export default Modelname;