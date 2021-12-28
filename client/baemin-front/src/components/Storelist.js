import { useQuery } from "react-query";
import axios from "axios";
const getStoreList = async () => {
  const response = await axios.get("http://localhost:4000/api/store");
  console.log("response : ", response);
  return response.data;
};
export default function Storelist({ selectedCategory }) {
  const {
    isLoading,
    error,
    data: storeList,
  } = useQuery("storeList", () => getStoreList());
  console.log("isLoading : ", isLoading);
  if (isLoading === true) {
    return <>로딩중</>;
  }
  return (
    <>
      <div>상점목록</div>
      <div>{selectedCategory}</div>
      <div>{JSON.stringify(storeList)}</div>
    </>
  );
}
