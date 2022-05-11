import React, { useState } from "react";
import Logo from "../../asset/logo.png";
import "./login.scss";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const handleFormChange = (e) => {
    let data = e.target;
    setForm({ ...form, [data.name]: data.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    setIsLogin(true);
    if (form.email === "" || form.password === "") {
      return;
    }
    // login(form);
  };
  return (
    <div className="login__bg login__wrapper">
      <div className="login__content-wrapper">
        <img
          src={Logo}
          height={130}
          width={130}
          style={{ marginLeft: "150px" }}
        />
        <h1 className="login__title">Đăng Nhập</h1>
        <form>
          <div className="form__input-wrap">
            <div className="form__lable">
              <span>Email</span>
            </div>
            <div className="form__input">
              <input
                type="email"
                name="email"
                placeholder="nhom2@gmail.com"
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
          </div>
          <div className="input__err">
            <div></div>
            <div> Sai thông tin tài khoản{/* error content */}</div>
          </div>
          <div className="form__input-wrap" style={{ marginTop: 5 }}>
            <div className="form__lable">
              <span>Password</span>
            </div>
            <div className="form__input">
              <input
                type="password"
                name="password"
                placeholder="12345678"
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
          </div>
          <div className="input__err">
            <div></div>
            <div> Sai mật khẩu{/* error content */}</div>
          </div>
          <div className="login__button-wrap">
            <input
              value={"Đăng Nhập"}
              type="submit"
              className="btn btn-primary"
              onClick={(e) => submitForm(e)}
            />
          </div>
          <div className="register-link">
            <span>Bạn chưa có tài khoản ?</span> <a href="/register">Đăng Ký</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
