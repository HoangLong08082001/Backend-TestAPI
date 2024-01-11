import pool, { emit } from "../../config/database";
import jwtModal from "../JWT/jwtService";
import LoginModal from "./ClientService";
import bcrypt from "bcrypt";
import { createJwt } from "../../middleware/JwtAction";
import dotenv from "dotenv";
dotenv.config();
const salt = 10;
const LoginClient = (req, res) => {
  let username = req.body.username;
  pool.query(LoginModal.loginClient, [username], (err, data) => {
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
            return res.status(200).json({
              message: "success",
              username: username,
              MaKH: data[0].MaKH,
            });
          }
        }
      );
    } else {
      return res.status(200).json("fails");
    }
  });
};
const LogoutClient = (req, res) => {
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

module.exports = { LoginClient, LogoutClient };
