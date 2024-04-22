import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import personIcon from "../img/person.png";
import boxIconUser from "../img/box-user.png";
import boxIconPass from "../img/box-pass.png";
import logo from "../img/ttblogo.png";



function Login() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: inputs.username,
      password: inputs.password,
      expiresIn: 60000,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === "ok") {
          MySwal.fire({
            html: <i>{'เข้าสู่ระบบสำเร็จ'}</i>,
            icon: "success",
          }).then((value) => {
            localStorage.setItem("token", result.accessToken);
            navigate("/dashboard");
          });
        } else {
          MySwal.fire({
            html: <i>{'บัญชีผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'}</i>,
            icon: "error",
          });
        }
      })
      .catch((error) => console.error(error));
    console.log(inputs);
  };
  return (
    <header>
      <div className="text-center" id="container">
        <form onSubmit={handleSubmit} id="form-signin">
          <h1 className="h2 mb-3" id="header">
            ระบบบริหารจัดการข้อมูลการพิจารณาสินเชื่อบ้าน
          </h1>
          <div id="icon">
            <img src={logo} alt="" />
          </div>
          <div className="form-group" id="textbox-user">
            <label htmlFor="inputUsername" className="sr-only">
              {/* Username */}
            </label>
            <div id="username">
              <TextField
                type="text"
                id="inputUsername"
                className="form-control"
                label="บัญชีผู้ใช้"
                name="username"
                variant="outlined"
                value={inputs.username || ""}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </div>

          <div className="form-group" id="textbox-password">
            {/* <img src={boxPassIcon} alt=""/> */}
            <label htmlFor="inputPassword" className="sr-only">
              {/* Password */}
            </label>
            <TextField
              type="password"
              id="inputPassword"
              className="form-control"
              label="รหัสผ่าน"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>

          <div id="sub-btn">
            <div className="flex items-center" id="remember-btn">
              <input
                type="checkbox"
                className="form-check-input me-2 rounded-circle"
                id="remember-me"
                name="rememberMe"
              />
              <label
                htmlFor="rememberMe"
                className="text-xs text-gray-500 ml-3"
              >
                จดจำรหัสผ่าน
              </label>
            </div>

            <div id="forget-pass-btn">ลืมรหัสผ่าน?</div>

          </div>
          <button id="login-btn" type="submit">
              เข้าสู่ระบบ
            </button>
        </form>
      </div>
    </header>
  );
}
export default Login;
