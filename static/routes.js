const controller = require("./controller");

module.exports = function(app) {
    app.get('/', controller.index);
    app.get('/task/:id', controller.one);
    app.post('/create', controller.create);
    app.put('/update/:id', controller.update);
    app.get('/destroy', controller.destroy);
}