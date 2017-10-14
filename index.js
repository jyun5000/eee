let express = require('express');
let app = express();
let router = express.Router();
let path = require('path');
let index = path.join(__dirname, './app');


// this creates a new route for "/" via the "GET" request
router.get('/', function(req, res, next) {
    console.log('no one sees this :D');
    res.send("hello world");
});

app.use('/',router);
app.use(express.static(index));


// this creates a new server instance
let port = "8080";
app.listen(port, function onStart(err) {
  console.log('Server listening on port 8080');
});
