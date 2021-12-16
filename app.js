const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const userRouter = require('./routes/user.router');
const roleRouter = require('./routes/role.router');

app.use('/users',userRouter);
app.use('/roles',roleRouter);

app.listen(port,()=>{});

module.exports = app;