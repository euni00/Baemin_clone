import { useRef } from "react";
import axios from "axios";
export default function Signup() {
  const inputRef = useRef({
    username: null,
    password: null,
    email: null,
    age: null,
  });

  const signUpHandler = () => {
    console.log(inputRef);
    axios.post("http://localhost:4000/api/user/signup", {
      username: inputRef.current.username.value,
      password: inputRef.current.password.value,
      email: inputRef.current.email.value,
      age: inputRef.current.age.value,
    });
  };

  return (
    <div>
      <h1>회원가입페이지입니다.</h1>
      <div className="Signup">
        <input
          placeholder="username"
          ref={(el) => (inputRef.current.username = el)}
        ></input>
        <input
          type="password"
          placeholder="password"
          ref={(el) => (inputRef.current.password = el)}
        ></input>
        <input
          type="email"
          placeholder="email"
          ref={(el) => (inputRef.current.email = el)}
        ></input>
        <input
          type="number"
          placeholder="age"
          ref={(el) => (inputRef.current.age = el)}
        ></input>
        <button onClick={signUpHandler}>회원가입</button>
      </div>
    </div>
  );
}
