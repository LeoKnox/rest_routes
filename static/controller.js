const Task = require("./models");

module.exports = {
    index: function(req, res){
        console.log('ok');
        res.json({message: 'success', data:'home'});
    },
    one: function(req, res){
        var id = req.params.id;
        console.log('one');
        res.json({message: 'displayed', data:id})
    },
    create: function(req, res){
        var nm = req.body.name;
        var ds = req.body.description;
        var cm = req.body.completed;
        var newobj = new Task({ name: nm});
        console.log('welcome');
        res.json({message: newobj + ' created'});
    },
    update: function(req, res){
        var id = req.params.id;
        res.json({message: id + ' updated'});
    },
    destroy: function(req,res){
        res.json({message: 'destroyed'});
    }
}