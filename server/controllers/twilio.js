// twilio.js
const twilio = require("twilio");

const accountSid = "AC0835c7db526f5705e6f33a9924434c8d"; // Replace with your Twilio Account SID
const authToken = "1796c9edc1634520b4cc7d6ce9f4a58f"; // Replace with your Twilio Auth Token
const client = twilio(accountSid, authToken);

module.exports = client;
