const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  name:{
    type:String,
    required: [true , 'Name must be in charecrter']
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
