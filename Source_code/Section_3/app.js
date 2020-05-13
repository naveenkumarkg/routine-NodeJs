const http = require("http");
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First NodeJs Program</title></head>');
    res.write('<body><input type="text"><button type="submit" method="POST" action="/message">Save</button></body>');
    res.write('</html>');
    res.end();

})

server.listen(3000);
//process.exit();
