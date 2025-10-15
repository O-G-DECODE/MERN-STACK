
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // Serve the requested file
    const filePath = req.url === '/' ? 'website/anand.html' : 'website' + req.url;
    const ext = path.extname(filePath);

    // Set correct content type based on extension
    let contentType = 'text/html';
    if (ext === '.css') contentType = 'text/css';
    else if (ext === '.js') contentType = 'text/javascript';
    else if (ext === '.png') contentType = 'image/png';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            console.error('Error reading file:', err);
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });

}).listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
