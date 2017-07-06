const  { ObjectID } = require('mongodb');

const  { mongoose } = require('../server/db/mongoose');
const  { Todo } = require('../server/models/Todo');
const  { User } = require('../server/models/User');

// Todo.remove({})
//   .then(res => {
//     console.log(res);
//   });

// Todo.findOneAndRemove();
Todo.findByIdAndRemove('595e2bf3056c76f22fc8753f')
  .then(todo => {
    console.log(todo);
  });
