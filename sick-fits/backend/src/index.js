const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env'});
const createServer = require('./createServer');
const deb = require('./db');

const server = createServer();

// Use express middleware to handle cookies (JSON Web Tokens)
server.express.use(cookieParser());

// decode the JWT so we can get the user ID on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  // console.log("token", token);
  // if (token) {
  //   const { userID } = jwt.verify(token, process.env.APP_SECRET)
  //   console.log("userID", userID)
  //   // put the userID onto the req for future requests to access
  //   req.userID = userID;
  // }

  next();
});

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,

  },
}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
});