import LeftArrow from "../images/leftarrow.svg";
import axios from "axios";
import { useQuery } from "react-query";
const getCategories = async () => {
  const response = await axios.get("http://localhost:4000/api/category");
  console.log("response : ", response);
  return response.data;
};
export default function Category({ setSelectedCategory }) {
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery("category", () => getCategories());
  console.log("isLoading : ", isLoading);
  if (isLoading === true) {
    return <>로딩중</>;
  }
  // console.log(categories);
  // let categoriescomponent = [];
  // for (let i = 0; i < categories.length; i++) {
  //   categoriescomponent.push(
  //     <div key={categories[i].id}>{categories[i].title}</div>
  //   );
  // }
  // categories.forEach((category) => {
  //   categoriescomponent.push(<div key={category.id}>{category.title}</div>);
  // });

  const categoriescomponent = categories.map((category) => {
    console.log(category._id);
    return (
      <div key={category._id} onClick={() => setSelectedCategory(category._id)}>
        {category.title}
      </div>
    );
  });
  return <div className="category">{categoriescomponent}</div>;
}
