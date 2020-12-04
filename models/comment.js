const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  author: String,
  text: String,
  complete: Boolean,
}, { timestamps: true });

export default mongoose.model('Comment', CommentsSchema);