var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	console.log('Url : ' + req.url)
	if(req.url === '/home/contact'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
  		res.end('Home Contato \n');
	} else if(req.url === '/products'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
  		res.end('Product list \n');
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
  		res.end('Page ' + req.url + 'not exists \n');
	}

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');