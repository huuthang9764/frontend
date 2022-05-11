import React, { useContext, useState } from "react";
import logo from "../../asset/logo.png";
import "./header.scss";
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
        <form>
          <input type="text" name="name" placeholder="Tìm kiếm sản phẩm ..." />
          <input type="submit" value="Tìm Kiếm" />
        </form>
        <ul>
          <li className="item-hotline">
            <FaPhoneAlt size={40} style={{ marginTop: 20 }} />
            <span className="hotline-content">
              <label>Hotline</label>
              <span>039.406.9764</span>
            </span>
          </li>
          <li className="header-news">
            <Link to="/tintuc">
              <FaNewspaper size={40} style={{ marginTop: 10, width: "100%" }} />
              <span>Tin Tức</span>
            </Link>
          </li>
          <li className="header-news">
            <Link to="/cart">
              {/* <span>{cart.length}</span> */}
              <FaCartPlus size={40} style={{ marginTop: 10, width: "100%" }} />
              <span>Giỏ hàng</span>
            </Link>
          </li>
          <li className="header-news">
            <Link to="/login">
              <FaRegUser size={40} style={{ marginTop: 10, width: "100%" }} />
              <span>Đăng nhập</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="Menu">
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/products">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/categorys">Danh mục sản phẩm</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
