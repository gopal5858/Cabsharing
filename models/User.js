const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    required: {
        type: String,
        required: true
    },
   name: {
    type: String,
    required: true
   },
   email: {
    type: String,
    required: true
   },
   password: {
    type: String,
     required: true
   },
   gender: {
    type: String,
    required: true
   },
   Hall: {
    type: String,
   },
   Room: {
    type: String,
   },  
   Address: {
    type: String,
   },
   birthday: {
    type: String,
   },
   phone: {
    type: String,
   },
   profile_pic: {
    type: String,
   },
   date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;