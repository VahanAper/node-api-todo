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
  //   .findOneAndUpdate({
  //     _id: new ObjectID('595b6b235818775a542b4b50'),
  //   }, {
  //     $set: {
  //       completed: true,
  //     }
  //   }, {
  //     returnOriginal: false
  //   })
  //   .then(result => {
  //     console.log(result);
  //   });

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('595b49c909bffb20203acd52'),
    }, {
      $inc: {
        age: 5
      }
    }, {
      returnOriginal: false
    })
    .then(result => {
      console.log(result);
    });

  // db.close();
});
