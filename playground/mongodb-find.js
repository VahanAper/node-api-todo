const {
  MongoClient,
  ObjectID,
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.');

  // db.collection('Todos')
  //   .find({
  //     // completed: false,
  //     _id: new ObjectID('595b4923c6b54c5304fb06c9'),
  //   })
  //   .toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     if (err) {
  //       console.log('Unable to fetch todos', err);
  //     }
  //   });

  db.collection('Users')
    .find({
      name: 'Narek'
    })
    .toArray()
    .then((docs) => {
      console.log(docs);
    }, (err) => {
      if (err) {
        console.log(err);
      }
    });

  // db.collection('Todos')
  //   .find()
  //   .count()
  //   .then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //     if (err) {
  //       console.log('Unable to count todos', err);
  //     }
  //   });

  // db.close();
});
