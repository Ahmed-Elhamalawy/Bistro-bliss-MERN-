const accountSid = "AC0835c7db526f5705e6f33a9924434c8d";
const authToken = "1796c9edc1634520b4cc7d6ce9f4a58f";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: "whatsapp:+14155238886",
    contentSid: "HXb5b62575e6e4ff6129ad7c8efe1f983e",
    contentVariables: '{"1":"12/1","2":"3pm"}',
    to: "whatsapp:+201156665280",
  })
  .then((message) => console.log(message.sid))
  .done();
module.exports = client;
