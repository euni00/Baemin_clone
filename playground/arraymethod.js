const arr = [
  {
    _id: 1,
    storename: "프로마치",
    star: 0,
    minimum_price: 16000,
    place_id: 1,
    category_id: 4,
    title: "양식",
    place_name: "서울",
    Store_id: 1,
  },
  {
    _id: 1,
    storename: "로제 떡볶이",
    star: 4.9,
    minimum_price: 15000,
    place_id: 1,
    category_id: 2,
    title: "한식",
    place_name: "서울",
    Store_id: 2,
  },
  {
    _id: 1,
    storename: "프로마치",
    star: 0,
    minimum_price: 15000,
    place_id: 1,
    category_id: 4,
    title: "양식",
    place_name: "서울",
    Store_id: 6,
  },
  {
    _id: 1,
    storename: "북경루",
    star: 3.6,
    minimum_price: 8000,
    place_id: 1,
    category_id: 3,
    title: "중식",
    place_name: "서울",
    Store_id: 8,
  },
  {
    _id: 1,
    storename: "제육",
    star: 4.3,
    minimum_price: 10000,
    place_id: 1,
    category_id: 2,
    title: "한식",
    place_name: "서울",
    Store_id: 9,
  },
];

// const newArr = arr.filter((food) => {

//   return food.title == "한식";
// });

// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].storename);
// }

// console.log(newArr);

// const newArr = arr.map((food) => {
//   if (food.title == "한식") return food.storename;
// });
// console.log(newArr);

// const newArr = arr.filter((food) => {
//   return food.title == "한식";
// });
// const newArr2 = newArr.map((food) => {
//   return food.storename;
// });

// const newArr = arr
//   .filter((food) => {
//     return food.title == "한식";
//   })
//   .map((food) => {
//     return food.storename;
//   });
// console.log(newArr);

const newArr = arr
  .filter((food) => food.title == "한식")
  .map((food) => food.storename);
console.log(newArr);
