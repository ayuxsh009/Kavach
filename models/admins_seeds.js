const mongoose = require('mongoose');
const uri = `mongodb://localhost:27017/fix`

mongoose
  .connect(uri, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Admin is saying DataBase Connected Successfully");
  })
  .catch(err => console.log(err));


const admins= require('./admins');

