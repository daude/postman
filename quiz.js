var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

// create an app
var app = express();

// connect to db
var db = mongojs('quiz', ['quiz']);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// allow app to use
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allo-Headers', 'Content-Type');
    next();
})

console.log('staring server....')

// get all records
app.get('/quiz', function(req, res){
    db.quiz.find(function(err, doc){
        res.json(doc);
    });
});

app.post('/quiz', function(req, res){
    console.log('added record: '+req.body.name);
    db.quiz.insert(req.body, function(err, doc){
        res.json(doc);
    });
});

/*// select a record
app.get('/quiz/:id', function(req, res){
    var id = req.params.id;
    var query = {
        _id: mongojs.ObjectId(id)
    };
    db.quiz.findOne(query, function(err, doc){
        console.log('doc', doc)
        // doc.answer = JSON.stringify(doc.answer);
        res.json(doc);
    })
})*/

app.get('/answers', function(req, res){
    //console.log('Answers', answers)
    db.answers.find(function(err, doc){
        res.json(doc);
    });
});

app.post('/answers', function(req, res){
    console.log('added record: '+req.body.name);
    db.answers.insert(req.body, function(err, doc){
        res.json(doc);
    });
});
// select a record
/*app.get('/answers/', function(req, res){
    var id = req.params.id;
    var query = {
        _id: mongojs.ObjectId(id)
    };
    db.answers.findOne(query, function(err, doc){
        console.log('doc', doc)
        // doc.answer = JSON.stringify(doc.answer);
        res.json(doc);
    })
})*/

// add records


/*app.post('/answers/:id', function(req, res){
    var id = req.params.id;
    var query = {
        _id: mongojs.ObjectId(id)
    };
    db.answers.findOne(query, function(err, doc){
        console.log('doc', doc)
        // doc.answer = JSON.stringify(doc.answer);
        res.json(doc);
    })
})*/

// update a recordquiz
/*app.put('/quiz/:id', function(req, res){
    var id = req.params.id;
    var document = {
        query: {id: mongojs.ObjectId(id)},
        update: {
            $set: {
                name: req.body.name,
                questions: req.body.questions,
                answer: JSON.stringify(req.body.answer)
            }
        }
    }
    db.quiz.findAndModify(document, function (err, doc){
        res.json(doc);
    });
});

//delete a record
app.delete('/quiz/:id', function (req, res){
    var id = req.params.id;
    console.log('deleted record id: '+ id);
    var query = {
        _id: mongojs.ObjectId(id)
    };
    db.quiz.remove(query, function (err, doc){
        res.json(doc);
    });
});*/

app.listen(4444, function(){
    console.log('Started on PORT 4444');
});
