const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "title is required"],
    },
    donor: {
      type: String,
      trim: true,
      required: [true, "donor name is required"],
    },
    file: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true
  }
);



module.exports = mongoose.model('books', bookSchema)