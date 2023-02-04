const { Schema, model, default: mongoose } = require("mongoose");
const shortId = require("shortid");

const linkSchema = new Schema(
  {
    full: {
      type: String,
      required: true
    },
    short: {
      type: String,
      required: true,
      default: shortId.generate()
    },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Link = model("Link", linkSchema);

exports.Link = Link;
