const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Router/index');

const app = express();

const host ='localhost';
const port = 'process.env.PORT || 2121';
const ServerdbUrl = 'mongodb+srv://zm_clone:9QUdQT1AmzT4xpAq@cluster0.fhcnp.mongodb.net/zomato_clone?retryWrites=true&w=majority';

app.use(cors());
app.options('*',cors());
app.use(express.json());
app.use('/',router);

mongoose.connect(ServerdbUrl)
.then(res =>{
    app.listen(port,host,()=>{
        console.log(`Server is running at ${host}:${port}`)
    });
})
.catch(err=> console.log(err));
