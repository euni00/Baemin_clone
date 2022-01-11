import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Storelist from "../components/Storelist";
export default function DeleteStore() {
  const [storeList, setStoreList] = useState([]);
  async function fetchData() {
    const response = await axios.get("http://localhost:4000/api/store");
    console.log(response.data);
    setStoreList(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  async function ClickDeleteStore(id) {
    await axios.delete(`http://localhost:4000/api/store/${id}`);
    fetchData();
  }
  return (
    <div className="DeleteStore">
      {storeList.map((store) => {
        return (
          <div>
            <div>{store.storename}</div>
            <div>{store.star}</div>
            <button onClick={() => ClickDeleteStore(store.Store_id)}>
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
