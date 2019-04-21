const bcryptjs = require('bcryptjs');
const salt = "$2a$10$qWUNDATwSn/vNnSlvvOHL.";
const email = "egor.shpitko.00@mail.ru";
const emailHash = bcryptjs.hashSync(email, salt);
console.log(emailHash.slice(-10))