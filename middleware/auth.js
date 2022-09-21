///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Strategy, ExtractJwt } = require("passport-jwt");

const User = require("../models/User");

///////////////////////////////
// CONFIGURATION
////////////////////////////////

const secret = process.env.JWT_SECRET;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

///////////////////////////////
// AUTHENTICATION FUNCTIONALITY
////////////////////////////////

const verify = async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload.id);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const strategy = new Strategy(opts, verify);
passport.use(strategy);
passport.initialize();

const requireToken = passport.authenticate("jwt", { session: false });

const createUserToken = (req, user) => {
  if (
    !user ||
    !req.body.password ||
    !bcrypt.compareSync(req.body.password, user.password)
  ) {
    const error = new Error("The provided username or password is incorrect");
    error.statusCode = 422;
    throw error;
  }

  return jwt.sign({ id: user._id }, secret, { expiresIn: 36000 });
};

const handleValidateOwnership = (req, document) => {
  const ownerId = document.owner._id || document.owner;
  if (!req.user._id.equals(ownerId)) {
    throw Error("Unauthorized Access");
  } else {
    return document;
  }
};

module.exports = {
  requireToken,
  createUserToken,
  handleValidateOwnership
};