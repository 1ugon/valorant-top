const dotenv = require("dotenv").config();
const twit = require("twit");

const consumer_key = process.env.TWITTER_KEY;
const consumer_secret = process.env.TWITTER_SECRET;
const access_token = process.env.TWITTER_ACCESS_TOKEN;
const access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

const T = new twit({
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret,
});

module.exports = T;
