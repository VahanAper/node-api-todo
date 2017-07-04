const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlenght: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null,
  },
});

const newTodo = new Todo({
  text: 'Make a video.'
});

newTodo.save()
  .then((doc) => {
    console.log('Saved Todo.', doc);
  }, e => {
    console.log('Unable to save Todo.', e);
  });
