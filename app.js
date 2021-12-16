const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./routes/user.router');
const roleRouter = require('./routes/role.router');
const advertisementRouter = require('./routes/advertisement.router');


app.use(express.json());

app.use('/users',userRouter);
app.use('/roles',roleRouter);
app.use('/advertisements',advertisementRouter);

app.listen(port,()=>{});

module.exports = app;