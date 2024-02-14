const http = require('node:http');
const PORT = process.env.PORT || 3001;
console.log(PORT);
const server = require('./app.js');

// const server = http.createServer((req, res) => {
//   res.end('hola');
// });

server.listen(PORT, () => {
  console.log(`Server listening in PORT = ${PORT}`);
});
