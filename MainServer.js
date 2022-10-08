var http = require('http');
var url = require('url');
var fs = require('fs');

var port = 80;

var screamFilePath = "screams.txt";

// Create scream file.
fs.readFile(screamFilePath, function(err, data){
	if (err){
		fs.writeFile(screamFilePath, 'Screams start here.', 'utf-8', function(err){console.log(err);});
	}
});

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  console.log(req.url, req.url == "/void");
  
  if (req.url == "/void"){
	  fs.readFile("void.html", function(err, data){
		  if (err){
			  res.writeHead(404, {'content-type': 'text/html'});
			  res.write("Didn't find the main page. probably forgot it.");
			  return res.end();
		  }
		  res.writeHead(200, {'content-type': 'text/html'});
		  res.write(data);
		  return res.end();		  
	  });
  } else if(req.url == "/screams.txt"){
	  fs.readFile("screams.txt", function(err, data){
		  if(err){
			  res.writeHead(404);
			  return res.end();
		  }
		  res.writeHead(200);
		  res.write(data);
		  res.end();
	  });
  }else{
	  var urlData = url.parse(req.url, true);
	  if (urlData.query.newscream){
		  var error = "";
		  var screamData = urlData.query.newscream;
		  
		  // Attempt at preventing xss
				var replacements = {
					"<":"&lt;",
					">":"&gt;",
					"/":"&sol;",
					"\"":"&quot;",
					"'":"&apos;",
					"&":"&amp;"
				};
				for(var sign in Object.keys(replacements)){
					screamData.replace(sign, replacements[sign]);
				}
				
		  fs.appendFile(screamFilePath, `\n${urlData.query.alias} : ${screamData}`, 'utf-8', 
		  function(err){
			  console.log(err);
			  error = err;
			});
		  
		  if (error != ""){
			res.writeHead(500);
			res.write(error);
		  }
		  else{
			  res.writeHead(200);
			  res.write("Scream recorded successfully.");
		  }
		  return res.end();

	  }else{  
		  res.writeHead(404, {'content-type': 'text/html'});
		  res.write("Wrong page go to <a href = '/void' > here.</a>");
		  return res.end();
	  }
  }
  
}).listen(port);