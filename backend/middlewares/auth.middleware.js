const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const blacklistToken = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');
const blacklistTokenModel = require('../models/blacklistToken.model');

const getToken = (req) => {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.split(' ')[1];
  }

  return req.cookies?.token;
}

module.exports.authUser = async (req, res , next) => {
  const token = getToken(req)

  if(!token){
    return res.status(401).json({message: "Unauthorize"})
  }

  const isBlacklistToken = await blacklistTokenModel.findOne({ token: token})
  if (isBlacklistToken) {
    return res.status(401).json({ message: "unauthorize "})
  }

  try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY)

    const user = await userModel.findById(decoded._id)
    if (!user) {
      return res.status(401).json({ message: "unauthorize "})
    }
    req.user = user;

    return next();

  } catch (error) {
    return res.status(401).json({ message: "unauthorize "})
  }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = getToken(req)

    if(!token){
    return res.status(401).json({message: "Unauthorize"})
  }

  const isBlacklistToken = await blacklistTokenModel.findOne({ token: token})
  if (isBlacklistToken) {
    return res.status(401).json({ message: "unauthorize "})
  }
  
  try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY)

    const captain = await captainModel.findById(decoded._id)
    if (!captain) {
      return res.status(401).json({ message: "unauthorize "})
    }
    req.captain = captain;

    return next();

  } catch (error) {
    return res.status(401).json({ message: "unauthorize "})
  }
}
