import { useRef, useState } from "react";
import Comment from "./components/Comment.js";
function App() {
  // input 안의 값을 javascript에서 알 수 있게 한다.
  const inputRef = useRef(null);

  // submit을 누르면 input 안의 값을 댓글로 추가한다. (날짜, 시간)
  const [comments, setComments] = useState([]);
  const submithandler = () => {
    const comment = inputRef.current.value;
    console.log("comment : ", comment);
    // 기존에 있는 comments에서 comment를 추가하여 새로운 배열 생성
    setComments([...comments, { comment, date: new Date() }]);
    console.log("comments : ", comments);
  };

  // 댓글 개수를 span tag안의 값으로 바꾼다.

  return (
    <div className="App">
      <div>
        {comments.map((data) => {
          return <Comment key={data.comment} comment={data} />;
        })}
      </div>
      <input ref={inputRef} />
      <button onClick={submithandler}>submit</button>
      <span>{comments.length}</span>
    </div>
  );
}

export default App;
