import axios from "axios";
import { useState, useEffect } from "react";
export default function ChangeStore() {
  const [storeList, setStoreList] = useState([]);
  async function fetchData() {
    const response = await axios.get("http://localhost:4000/api/store");
    setStoreList(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      상점 수정
      <div>
        {storeList.map((store) => {
          return (
            <div>
              <span>
                {store.storename} {store.star} {store.author}
              </span>
              {store.author === localStorage.getItem("email") && (
                <button>수정</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ChangeStore가 실행될때, 상점 리스트 가져오기
// 실행될때라는건 1번과 2번 사이
// get API 불러오기
// 상점 리스트 저장하기 (useState)
// 출력 (return안에 받아온 데이터로 html을 만들어준다.)
