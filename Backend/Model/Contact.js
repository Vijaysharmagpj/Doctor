const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  yourName: {
    type: String,
    required: true,
  },
  yourEmail: {
    type: String,
    required: true,
    trim: true,
  },
  yourMessage: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("ContactUs", contactSchema);
