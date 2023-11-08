const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testdb')

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String
})

userSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model('testing',userSchema);

module.exports = userModel;