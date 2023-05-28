import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // This refers to the User model
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const todo = mongoose.model('Todo', todoSchema);

export default todo;
