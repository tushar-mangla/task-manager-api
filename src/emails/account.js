const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "guddu.mangala456@gmail.com",
    subject: "Thanks for joining in!",
    text: `welcome to the app, ${name}. let me know how you get along with the app.`,
    html: "",
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "guddu.mangala456@gmail.com",
    subject: "Sorry to see you go!",
    text: `Sorry, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
