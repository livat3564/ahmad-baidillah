const http = require("http");

const server = http.createServer((req, res) => {
if (req.url =="/"){

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>this is home page.</p></body></html>");
    res.end();

}else if (req.url =="/profile") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>okokokoko.</p></body></html>");
    res.end();

}else if (req.url =="/admin") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>wwkwkw.</p></body></html>");
    res.end();
}else if (req.url =="/sabeb") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>okokokoko.</p></body></html>");
    res.end();

}else if (req.url =="/bebas") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>wwkwkw.</p></body></html>");
    res.end();
}else if (req.url =="/kuy") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>okokokoko.</p></body></html>");
    res.end();

}else if (req.url =="/gasterus") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>wwkwkw.</p></body></html>");
    res.end();
}else if (req.url =="/pro") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>okokokoko.</p></body></html>");
    res.end();

}else if (req.url =="/noob") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>wwkwkw.</p></body></html>");
    res.end();
}else if (req.url =="/gasken") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>okokokoko.</p></body></html>");
    res.end();

}else if (req.url =="/tas") {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><p>wwkwkw.</p></body></html>");
    res.end();
    

}else {
    res.end("Invalid Request!");
}
});

console.log('server running in port 3008');

server.listen(3008);