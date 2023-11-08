const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/testdb')

const userSchema = mongoose.Schema({
  name: String,
  nickname: String,
  description: String,
  datecreated: {type: Date,default: Date.now()},
  tags: [String],
})

const userModel = mongoose.model('testing',userSchema);

module.exports = userModel;