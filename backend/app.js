const express = require("express");
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user.route')
const cookieParser = require("cookie-parser")
const captainRouter = require("./routes/captain.routes")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());


app.get('/', (req ,res) => {
res.send("hello world")
})

app.use('/api/users', userRouter);
app.use('/api/captain' , captainRouter)

module.exports = app;
