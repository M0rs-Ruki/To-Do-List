
import http from 'http';

const server = http.createServer((req, res) => {

    try {
        
        if(req.method == 'GET') {

            if(req.url == '/') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end("Home Page");
            } else if (req.url == '/about') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end("About Page");
            } else {
                res.writeHead(404, { 'Content-Type' : 'text/plain' });
                res.end("404 Not Found");
            }
        } else {
            throw new Error("Method Not Allowed")
        }
        
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Internal Server Error: ${error.message}`);
        
    }

})

const port = process.env.PORT;
server.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})
// localhost:3000

