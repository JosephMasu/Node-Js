import http from 'http';

const server = http.createServer((req, res) =>{
//routing
if (req.url ==='/'){
    res.writeHead(200, "Ok", {"Content-type": "text/html"});
    res.end("<a href='/contact'> Contact page</a>");
}else if(req.url === "/about"){
    res.writeHead(200, "Ok", {"Content-type": "text/html"});
    res.end("<h1> About Setion</h1>");
}else if(req.url === "/contact"){
    res.writeHead(200, "Ok", {"Content-type": "text/html"});
    res.end("<h1> Contact Setion</h1>");
}else{
    res.writeHead(404, "BAD", {"Content-type": "text/html"});
    res.end("<h1> 404 page Not Found</h1>");
}

});
server.listen(8000, () => console.log("Server Up!"));