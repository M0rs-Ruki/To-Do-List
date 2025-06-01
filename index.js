
import http from 'http';

const server = http.createServer((req, res) => {
    res.write("Hello World!!!");
    res.end("Hello World!!!");
})

const port = 3000;
server.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})
// localhost:3000

