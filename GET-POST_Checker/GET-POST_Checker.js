var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 4000);

app.get('/', function(req,res) {
  var getData = [];
  for (var d in req.query) {
    getData.push({'main':d,'body':req.query[d]});
  }
  var dataList = {};
  dataList.data = getData;
  res.render('get', dataList);
});

app.post('/', function(req,res){
  var postData = [];
  for (var d in req.body) {
    postData.push({'main':d,'body':req.body[d]});
  }
  var dataList = {};
  dataList.data = postData;
  res.render('posts', dataList);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
