import React, { useContext, useState } from "react";
import logo from "../../asset/logo.png";
import "../Header/header.scss";
import { Link } from "react-router-dom";
import { FaRegUser, FaPhoneAlt, FaCartPlus, FaNewspaper } from "react-icons/fa";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="header">
        <img
          src={logo}
          alt={logo}
          className="center"
          height={130}
          width={130}
          onClick={toggleMenu}
        />

        {/* <ul>
          <li className="header-news">
            <Link to="/login">
              <FaRegUser size={40} style={{ marginTop: 10, width: "100%" }} />
              <span>Đăng nhập</span>
            </Link>
          </li>
        </ul> */}
      </div>
      <div className="Menu">
        <ul>
          <li>
            <Link to="/admin/products">QL Sản phẩm</Link>
          </li>
          <li>
            <Link to="/admin/categorys">QL Danh Mục Sản Phẩm</Link>
          </li>
          <li>
            <Link to="/admin/receipts">QL Đơn Hàng</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
