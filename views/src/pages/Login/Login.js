import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <form>
      <h1>login</h1>
      <label htmlFor="">username</label>
      <br />
      <input type="text" name="" id="" />
      <br />
      <label htmlFor="">password</label>
      <br />
      <input type="text" name="" id="" />
      <br />
      <button>LOGIN</button>
      <Link to="/Register">register</Link>
    </form>
  );
}
