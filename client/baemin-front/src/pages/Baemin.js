import Header from "../components/Header.js";
import Ads from "../components/Ads.js";
import Category from "../components/Category";
import Storelist from "../components/Storelist.js";
import { useState } from "react";
export default function Baemin() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <Header />
      <Ads />
      <Category setSelectedCategory={setSelectedCategory} />
      {selectedCategory !== null && (
        <Storelist selectedCategory={selectedCategory} />
      )}
    </div>
  );
}
