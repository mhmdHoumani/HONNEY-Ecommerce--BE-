const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1];

      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      res.json({ message: "Not authorized, token failed!" });
    }
  }

  if (!token) {
    res.status(401);
    res.json({ message: "Not authorized, no token!" });
  }
});

const verifyTokenAndAuthorization = (req, res, next) => {
  protect(req, res, () => {
    if (req.user.id == req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  protect(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authorized! ");
    }
  });
};

module.exports = {protect, verifyTokenAndAuthorization, verifyTokenAndAdmin};
