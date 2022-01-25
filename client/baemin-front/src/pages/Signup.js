import { useRef } from "react";
export default function Signup() {
  const inputRef = useRef({ username: null });
  const signUpHandler = () => {
    console.log(inputRef);
  };
  return (
    <div>
      <h1>회원가입페이지입니다.</h1>
      <div className="Signup">
        <input
          placeholder="username"
          ref={(el) => (inputRef.current.username = el)}
        ></input>
        <input type="password" placeholder="password"></input>
        <input type="email" placeholder="email"></input>
        <input type="number" placeholder="age"></input>
        <button onClick={signUpHandler}>회원가입</button>
      </div>
    </div>
  );
}
