import React from "react";
import { Link } from "react-router-dom";
export default function DefaultLayout({ children }) {
  return (
    <div>
      <div className="list-menu">
        <Link to="/">Trang chu</Link>
        <Link to="/">About</Link>
        <Link to="/">Employee</Link>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
