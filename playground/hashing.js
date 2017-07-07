const jwt = require('jsonwebtoken');

const data = {
  id: 10
};

const token = jwt.sign(data, 'salt_change_it');
console.log('token', token);

const decoded = jwt.verify(token, 'salt_change_it')
console.log('decoded', decoded);

// const { SHA256 } = require('crypto-js');
//
// const message = 'asd oiajsd oj';
//
// const hash = SHA256(message).toString();
//
// console.log(hash);

// const data = {
//   id: 4
// };
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'salt_change_it').toString(),
// };
//
// token.data.id = 10;
// token.hash = SHA256(JSON.stringify(data)).toString();
//
// const resultHash = SHA256(JSON.stringify(token.data) + 'salt_change_it').toString();
//
// if (resultHash === token.hash) {
//   console.log('OK');
// } else {
//   console.log('Changed');
// }
