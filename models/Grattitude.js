const mongoose = require("mongoose");

const GrattitudeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  grateful: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("grattitude", GrattitudeSchema);
