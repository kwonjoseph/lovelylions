// module.exports = {
//   facebookAuth: {
//     clientID: process.env.FB_CLIENT_ID,
//     clientSecret: process.env.FB_CLIENT_SECRET,
//     callbackURL: `${process.env.HOST}/auth/facebook/callback`,
//   }
// };
module.exports = {
  facebookAuth: {
    clientID: '700876983441574',
    clientSecret: '7fe890bd8cf352a37cf062c94b35a063',
    callbackURL: 'https://exquiste-corpse.herokuapp.com/auth/facebook/callback'
    // callbackURL: 'http://localhost:3000/auth/facebook/callback'
    //if we use live heroku url then replace last line with 
  }
};
