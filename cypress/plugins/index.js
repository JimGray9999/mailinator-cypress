// loads in dotenv variables for logging into account
require('dotenv').config()

module.exports = (on, config) => {
  config.env.username = process.env.USERID;
  config.env.password = process.env.PASSWORD;

  return config
}
