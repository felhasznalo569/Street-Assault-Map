var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demoMap81.html', function(err, data) {
    res.write(data);
    return res.end();
  });
}).listen(8081);
 console.log('Server running on port 8081.');