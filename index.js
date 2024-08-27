const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Handle different routes
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the Home Page');
        res.end(); // End the response
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the About Page');
        res.end(); // End the response
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the Contact Page');
        res.end(); // End the response
    } else if (req.url === '/file-write') {
        // Write to a file
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error writing to file');
                res.end(); // End the response
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File created and written successfully');
                res.end(); // End the response
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end(); // End the response
    }
});

// Start the server and listen on port 5500
server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
