require('dotenv').config({ path: 'mailinator-cypress/.env' })

const username = process.env.USERID;
const password = process.env.PASSWORD;


module.exports = { username, password };