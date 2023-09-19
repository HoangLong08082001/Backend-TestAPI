import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const nonSecurePath = ["/", "/login", "/logout"];
//Tao token
const createJwt = (payload) => {
  let key = process.env.SECRET_KEY;
  let token = null;
  try {
    token = jwt.sign(payload, key, { expiresIn: process.env.EXPIRED_IN });
  } catch (error) {
    console.log(error);
  }
  return token;
};
const verifyToken = (token) => {
  let key = process.env.SECRET_KEY;
  let decoded = null;
  try {
    decoded = jwt.verify(token, key);
  } catch (error) {
    console.log(error);
  }
  return decoded;
};
const extractToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};
//Check quyen theo cookies
const checkUserJWT = (req, res, next) => {
  if (nonSecurePath.includes(req.path)) return next();
  let cookies = req.cookies;
  const tokenFormHeaders = extractToken(req);

  if ((cookies && cookies.jwt) || tokenFormHeaders) {
    let token = cookies && cookies.jwt ? cookies.jwt : tokenFormHeaders;
    let decoded = verifyToken(token);
    if (decoded) {
      req.user = decoded;
      req.token = token;
      next();
    } else {
      return res.status(401).json({
        message: "Not authenticated to use this filed",
      });
    }
  } else {
    return res.status(401).json({
      message: "Not authenticated to use this filed",
    });
  }
};
const checkUserPermission = (req, res, next) => {
  if (nonSecurePath.includes(req.path) || req.path === "/account")
    return next();
  if (req.user) {
    let email = req.user.email;
    let role = req.user.data;
    let currentUrl = req.path;
    if (!role || role.length === 0) {
      return res.status(403).json({
        message: "Not authenticated to use this filed",
      });
    }
    let canAccess = role.some((item) => item.url_quyen === currentUrl);
    if (canAccess === true) {
      next();
    } else {
      return res.status(403).json({
        message: "Not authenticated to use this filed",
      });
    }
  } else {
    return res.status(401).json({
      message: "Not authenticated to use this filed",
    });
  }
};
module.exports = { createJwt, verifyToken, checkUserJWT, checkUserPermission };
