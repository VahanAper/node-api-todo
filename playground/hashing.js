const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123123';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (error, hash) => {
    console.log(hash);
  })
});

const hashedPassword = '$2a$10$Iyy41XFIxKyNjAEzwlkn7.VtwqXkFPsH3abprgo0ATFxQjF.3eMBe';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// const data = {
//   id: 10
// };
//
// const token = jwt.sign(data, 'salt_change_it');
// console.log('token', token);
//
// const decoded = jwt.verify(token, 'salt_change_it')
// console.log('decoded', decoded);

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
