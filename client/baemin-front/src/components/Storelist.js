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

  //   exports.get_products = (_, res) => {
  //     models.Products.findAll({}).then((products) => {
  //       res.render("admin/products.html", { products });
  //   }

  return (
    <>
      <div>상점목록</div>
      <div>{selectedCategory}</div>
      <div>
        {storeList
          .filter((store) => {
            return store.category_id == selectedCategory;
          })
          .map((store) => {
            return (
              <div>
                {store.storename} 의 가격은 {store.minimum_price} 입니다.{" "}
              </div>
            );
          })}
      </div>
    </>
  );
}
