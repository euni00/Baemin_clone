import { useRef } from "react";
import axios from "axios";
import Error from "../components/Error";
import { useState } from "react";
export default function Login() {
  const inputRef = useRef({
    email: null,
    password: null,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const logInHandler = async () => {
    try {
      console.log(inputRef);
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          email: inputRef.current.email.value,
          password: inputRef.current.password.value,
        }
      );
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("email", response.data.email);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div>
      <h1>로그인페이지입니다.</h1>
      <div className="Signup">
        <input
          placeholder="email"
          ref={(el) => (inputRef.current.email = el)}
        ></input>
        <input
          type="password"
          placeholder="password"
          ref={(el) => (inputRef.current.password = el)}
        ></input>
        <button onClick={logInHandler}>로그인</button>
      </div>
      {errorMessage !== "" && (
        <Error message={errorMessage} setErrorMessage={setErrorMessage} />
      )}
    </div>
  );
}
