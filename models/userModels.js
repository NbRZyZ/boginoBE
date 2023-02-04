const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  password: String,
  email: String,
  createdAt: { default: Date.now(), type: Date },
},
{
  toJSON:{
    virtuals:true
  }
}
);

userSchema.virtual("links", {
  ref: "Link",
  localField: "_id",
  foreignField: "author_id",
});

const User = model("User", userSchema);

exports.User = User;