const mongoose = require("mongoose");

const GrattitudeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  item: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("grattitude", GrattitudeSchema);
