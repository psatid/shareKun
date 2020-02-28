const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

//create server
const app = express();
const port = process.env.port || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'share-kun'});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const personalInfoRouter = require('./routes/personal-info');
const usersRouter = require('./routes/users');

app.use('/personal-info', personalInfoRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('Server is running on port:', port) ;
});