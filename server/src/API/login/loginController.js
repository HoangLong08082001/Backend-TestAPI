import pool from "../../config/database";
import jwtModal from "../JWT/jwtService";
import LoginModal from "./loginService";
import bcrypt, { hash } from "bcrypt";
import { createJwt } from "../../middleware/JwtAction";
import dotenv from "dotenv";
dotenv.config();
const salt = 10;
const LoginEmployee = (req, res) => {
  let email = req.body.username;
  pool.query(LoginModal.loginEmployee, [email], (err, data) => {
    if (err) {
      return res.status(200).json("fails");
    }
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) {
            return res.status(200).json("fails");
          }
          if (response) {
            pool.query(jwtModal.getPosionRole, [email], (err, data) => {
              if (err) {
                return res.status(200).json("fails");
              }
              if (data) {
                let payload = {
                  email: req.body.username,
                  data,
                };
                let token = createJwt(payload);
                if (data && token) {
                  res.cookie("jwt", token, { httpOnly: true });
                }
                return res.status(200).json({
                  message: "success",
                  access_token: token,
                  email: email,
                  data,
                });
              }
            });
          }
        }
      );
    } else {
      return res.status(200).json("fails");
    }
  });
};
const LogoutEmployee = (req, res) => {
  try {
    res.clearCookie("jwt");
    return res.status(200).json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error from server" });
  }
};
module.exports = { LoginEmployee, LogoutEmployee };
