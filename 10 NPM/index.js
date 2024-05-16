import http from 'http';

const server = http.createServer((req, res) =>{

    res.writeHead(202, "Good", { "Content-Type":"text/html" });
    res.write("<h1>What's good bug?</h1>");
    
});
server.listen(8000, () => console.log("Server UP!"));
