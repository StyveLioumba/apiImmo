const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const userRouter = require('./routes/user.router');
const roleRouter = require('./routes/role.router');
const advertisementRouter = require('./routes/advertisement.router');
const advantageRouter = require('./routes/advantage.router');
const tagRouter = require('./routes/tag.router');


app.use(express.json());
app.use(cors());

app.use(express.static('public'));
app.use('/upload', express.static('upload'));


app.use('/users',userRouter);
app.use('/roles',roleRouter);
app.use('/advertisements',advertisementRouter);
app.use('/tags',tagRouter);
app.use('/advantages',advantageRouter);

app.listen(port,()=>{});

module.exports = app;