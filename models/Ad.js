const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  price: {
    type: String,
  },
  image:{
    type: String
  },
  description: {
    type: String
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model('ad', AdSchema);
