import axios from "axios";
import { useState, useEffect } from "react";
export default function ChangeStore() {
  const [storeList, setStoreList] = useState([]);
  const [isClickedList, setIsClickedList] = useState(
    new Array(storeList.length).fill(false)
  );
  const [inputData, setInputData] = useState("");
  async function fetchData() {
    const response = await axios.get("http://localhost:4000/api/store");
    setStoreList(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const onConfirm = async (id, star, minimum_price, place_id, category_id) => {
    await axios.put(
      "http://localhost:4000/api/store",
      {
        storename: inputData,
        star,
        minimum_price,
        place_id,
        category_id,
        _id: id,
      },
      { headers: { access_token: localStorage.getItem("access_token") } }
    );
    fetchData();
  };
  return (
    <div>
      상점 수정
      <div>
        {storeList.map((store, idx) => {
          return (
            <div>
              <span>
                {store.storename} {store.star} {store.author}
              </span>
              {store.author === localStorage.getItem("email") && (
                <>
                  <button
                    onClick={() => {
                      setIsClickedList((state) => {
                        state[idx] = true;
                        return [...state];
                      });
                    }}
                  >
                    수정
                  </button>

                  {isClickedList[idx] === true && (
                    <div>
                      <input
                        onChange={(e) => {
                          console.log(inputData);
                          setInputData(e.target.value);
                        }}
                      ></input>
                      <button
                        onClick={() =>
                          onConfirm(
                            store._id,
                            store.star,
                            store.minimum_price,
                            store.place_id,
                            store.category_id
                          )
                        }
                      >
                        확인
                      </button>
                    </div>
                  )}
                </>
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
