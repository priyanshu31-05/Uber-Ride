const app = require("./app");
const http = require("http");
const port = process.env.PORT || 3000
const connectdb = require('./db/db');



const server = http.createServer(app);
connectdb()

server.listen(port, () => {
    console.log(`server is running on ${port}`)
})
