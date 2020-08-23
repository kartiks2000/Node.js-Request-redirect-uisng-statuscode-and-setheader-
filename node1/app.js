// Redirecting requests

const ht = require('http');
const fs = require('fs');

const serv = ht.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('<html>');
        res.write('<head><title>Main page</title></head>');
        res.write('<body><form method="POST" action="/message"><input type="text" name="msg"><input type="submit" value="submit"></form></body>');
        // Form takes us to "/message" with a POST request
        res.write('</html>');
        return res.end();
    }
    if(req.url == '/message' && req.method == 'POST'){
        fs.writeFileSync('msgfile','message recieved!!');
        // redirecting to "/"
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page...</title></head>');
    res.write('<body><h1>Hi this is kartik saxena and this is my node.js page.</h1></body>');
    res.write('</html>');
    res.end();


});

serv.listen(3000);




