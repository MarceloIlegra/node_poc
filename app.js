var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	console.log('Url : ' + req.url)
	console.log(req);
	if(req.url === '/home/contact' && req.method === 'GET'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
  		res.end('Home Contato \n');
	} else if(req.url === '/products' && req.method === 'GET'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
  		res.end('Product list \n');
	} else if (req.url === '/products'&& req.method === 'POST'){
		req.on('data', function(chunk){
			console.log(chunk.toString());
		});
		res.writeHead(201, {'Content-Type': 'text/plain'});
		res.end('Create Product \n');
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
  		res.end('Page ' + req.url + 'not exists \n');
	}

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
