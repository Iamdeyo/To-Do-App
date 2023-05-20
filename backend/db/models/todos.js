import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
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
  },
  {
    timeStamps: true,
  }
);

const todo = mongoose.model('Todo', todoSchema);

export default todo;
