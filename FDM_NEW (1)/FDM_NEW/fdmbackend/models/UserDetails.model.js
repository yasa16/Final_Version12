const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserDetailsSchema = new Schema({
  Profession: {
    type: String,
  },
  Segmentation: {
    type: String,
  },
});

module.exports = UserDetails = mongoose.model("UserDetails", UserDetailsSchema);
