const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testDB");

const UserSchema  = mongoose.Schema({
  username: String,
  name: String,
  age: Number,

})

module.exports = mongoose.model("users",UserSchema); // This is now the default export which we will need to change if we want to export multiple things
