var db = new PouchDB('selecttest');
var remote = new PouchDB('http://martinic.iriscouch.com/selecttest', {ajax: {timeout: 20000}});
db.sync(remote, {live: true});

export default EmberPouch.Adapter.extend({
  db: db
});