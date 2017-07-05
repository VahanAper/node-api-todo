const expect = require('expect');
const supertest = require('supertest');

const { app } = require('../server');
const { Todo } = require('../models/Todo');

beforeEach((done) => {
  Todo.remove({})
    .then(() => done());
});

describe('POST /todos', () => {
  it('should create a new Todo', (done) => {
    const text = 'Test todo text';

    supertest(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find()
          .then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch((e) => {
            return done(e);
          });
      });
  });

  it('should not create todo with invalid data', (done) => {
    supertest(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find()
          .then((todos) => {
            expect(todos.length).toBe(0);
            done();
          })
          .catch((e) => {
            return doen(e);
          });
      });
  })
});
