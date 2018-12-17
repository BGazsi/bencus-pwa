var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use('/public', express.static('public', { maxAge: 86400000 }));
app.use('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
