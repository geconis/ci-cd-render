const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Hello from CI/CD!</h1><p>Automatic deployment works!</p>");
});

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});