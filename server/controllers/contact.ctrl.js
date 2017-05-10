var express = require("express");

var procedures = require("../procedures/contact.proc");

var router = express.Router();

router.route('/')
    .get(function(req, res){
        procedures.all().then(function(success){
            res.send(success);
        }, function(err){
            console.log(err);
            res.status(500).send(err);
        })
    })
    .post(function(req, res){
        procedures.write(req.body).then(function(success){
            res.status(201).send(success);
        }, function(err){
            console.log(err);
            res.status(500).send(err);

        })
    });

    router.route('/:id')
    .get(function(req, res){
        procedures.read(req.params.id).then(function(success){
            res.send(success);
        }, function(err){
            console.log(err);
            res.status(500).send(err);
        })
    })
    .post(function (req, res, next) { 
       
        emailSvc.sendEmail(req.body.email, req.body.subject, req.body.message)
        .then(function(success){
            console.log("Success");
            res.sendStatus(204);
        }, function(err){
            console.log(err);
            res.status(500).send(err);
        })
})
    .put(function(req, res){
        procedures.update(req.body).then(function(success){
            res.sendStatus(204);
        }, function(err){
            console.log(err);
            res.status(500).send(err);
        })
        
    })
    .delete(function(req, res){
        procedures.delete(req.params.id).then(function(success){
            res.sendStatus(204);
        }, function(err){
            res.status(500).send(err);
            console.log(err);
        })
    });
    

    module.exports = router;