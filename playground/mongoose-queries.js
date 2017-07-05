const  { ObjectID } = require('mongodb');

const  { mongoose } = require('../server/db/mongoose');
const  { Todo } = require('../server/models/Todo');

const id = '595cabda9a19bc042803258911';

if (!ObjectID.isValid(id)) {
  console.log('Id is not valid.');
}


// Todo.find({ _id: id })
//   .then(todos => {
//     console.log('Todos', todos);
//   });
//
// Todo.findOne({ _id: id })
//   .then(todo => {
//     console.log('Todo', todo);
//   });

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
  })
  .catch(e => console.log(e));
