//importing diffrent packages
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'config/.env' });

//creating mongoose connection
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to Database :: Mongodb ');
  console.log('CONNECTION ESTABLISHED');
});

module.exports = db;
