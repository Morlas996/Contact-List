var db = require("../config/db");

exports.all = function(id){
    return db.rows('GetAllContacts', []);
}
exports.read = function(id) {
    return db.row('GetSingleContact', [id]);
}
exports.write = function(p) {
    return db.row('InsertContact', [p.name, p.phone,  p.email]);
}
exports.delete = function(id) {
    return db.empty('DeleteContact', [id]);
}