var db = new PouchDB('pages');
db.sync('http://localhost:5984/pages', {live: true});

export default EmberPouch.Adapter.extend({
  db: db
});