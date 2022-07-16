const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

http
.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/HTML ");

  try {
    response.end("<h1>Hello NodeJs</h1>");
  } catch (err) {
    console.error(err);
  }
})
.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
