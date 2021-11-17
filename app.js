const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  req.url = req.url == '/' ? "index.html" :req.url;

  fs.readFile("./" + req.url, function(err, data){
    if(err){
      console.log(err);
      return res.end();
    }
    console.log(datatype(req.url.substr(req.url.lastIndexOf('.'))));
    res.setHeader('Content-Type', datatype(req.url.substr(req.url.lastIndexOf('.'))));
    res.write(data);
    return res.end();
  });
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


function datatype(url){
  let datatype;
  switch(url){
    case (".html"):
      datatype = 'text/html';      
    break;
    case (".js"):
      datatype = 'text/javascript';      
    break;
    case (".jpg"):
      datatype = 'image/jpeg';      
    break;
    case (".png"):
      datatype = 'image/png';      
    break;
    case (".css"):
      datatype = 'text/css';      
    break;
    case (".png"):
      datatype = 'image/png';      
    break;
    case (".mp3"):
      datatype = 'audio/mpeg';      
    break;

    default:
      'text/plain'
  }

  return datatype;
}