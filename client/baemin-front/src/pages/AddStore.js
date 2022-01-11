import axios from "axios";
import { useEffect, useRef, useState } from "react";
export default function AddStore() {
  const storenameRef = useRef(null);
  const starRef = useRef(null);
  const minimumpriceRef = useRef(null);
  const placeidRef = useRef(null);
  const categoryidRef = useRef(null);
  function ClickAddStore() {
    const storename = storenameRef.current.value;
    const star = starRef.current.value;
    const minimumprice = minimumpriceRef.current.value;
    const placeid = placeidRef.current.value;
    const categoryid = categoryidRef.current.value;
    console.log(storename);
    console.log(star);
    console.log(minimumprice);
    console.log(placeid);
    console.log(categoryid);
    axios.post("http://localhost:4000/api/store", {
      storename,
      star,
      minimum_price: minimumprice,
      place_id: placeid,
      category_id: categoryid,
    });
  }
  const [categoryList, setCategoryList] = useState([]);
  async function fetchData() {
    const response = await axios.get("http://localhost:4000/api/category");
    console.log(response.data);
    setCategoryList(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="AddStore">
      <input ref={storenameRef} placeholder="storename" />
      <input ref={starRef} placeholder="star" />
      <input ref={minimumpriceRef} placeholder="minimum price" />
      <input ref={placeidRef} placeholder="place_id" />
      {/* <input ref={categoryidRef} placeholder="category_id" /> */}
      <select ref={categoryidRef}>
        {categoryList.map((category) => {
          return <option value={category._id}>{category.title}</option>;
        })}
      </select>
      <button onClick={ClickAddStore}>상점추가</button>
    </div>
  );
}
