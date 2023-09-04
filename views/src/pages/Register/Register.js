import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Register() {
  const [TenNV, setTenNV] = useState("");
  const [CMND, setCMND] = useState("");
  const [Ngaysinh, setNgaysinh] = useState("");
  const [Sdt, setSdt] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  useEffect(() => {
    // axios.get("http://localhost:9000/position/list").then((data) => {
    //   console.log(data);
    // });
  }, []);
  const checkValidate = () => {
    if (TenNV === "") {
      toast.error("Please fill TenNV");
      return false;
    }
    if (CMND === "") {
      toast.error("Please fill CMND");
      return false;
    }
    if (Ngaysinh === "") {
      toast.error("Please fill Ngaysinh");
      return false;
    }
    if (Sdt === "") {
      toast.error("Please fill Sdt");
      return false;
    }
    if (Email === "") {
      toast.error("Please fill Email");
      return false;
    }
    //regular email
    if (!/\S+@\S+\.\S+/.test(Email)) {
      toast.error("Wrong email format");
      return false;
    }
    if (Password === "") {
      toast.error("Please fill Password");
      return false;
    }
    toast.success("All field is filled");
    return true;
  };
  const handleClick = () => {
    let check = checkValidate();
    if (check === true) {
      axios.post("http://localhost:9000/position/add", {
        TenNV,
        CMND,
        Ngaysinh,
        Sdt,
        Email,
        Password,
      });
    }
  };
  return (
    <div>
      <h1>login</h1>
      <label htmlFor="">name</label>
      <br />
      <input
        type="text"
        name=""
        id=""
        value={TenNV}
        onChange={(e) => setTenNV(e.target.value)}
        required
      />
      <br />
      <label htmlFor="">cmnd</label>
      <br />
      <input
        type="text"
        name=""
        id=""
        value={CMND}
        onChange={(e) => setCMND(e.target.value)}
        required
      />
      <br />
      <label htmlFor="">sdt</label>
      <br />
      <input
        type="text"
        name=""
        id=""
        value={Sdt}
        onChange={(e) => setSdt(e.target.value)}
        required
      />
      <br />
      <label htmlFor="">ngaysinh</label>
      <br />
      <input
        type="date"
        name=""
        id=""
        value={Ngaysinh}
        onChange={(e) => setNgaysinh(e.target.value)}
        required
      />
      <br />
      <label htmlFor="">email</label>
      <br />
      <input
        type="text"
        name=""
        id=""
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <label htmlFor="">password</label>
      <br />
      <input
        type="text"
        name=""
        id=""
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit" onClick={handleClick}>
        Register
      </button>
      <Link to="/Login">login</Link>
    </div>
  );
}
