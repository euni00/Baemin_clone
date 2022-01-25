import "./App.css";
import "./reset.css";
import { useState } from "react";
import Searchpage from "./pages/Searchpage";
import Baemin from "./pages/Baemin.js";
import Ads from "./components/Ads.js";
import Category from "./components/Category";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import Addstore from "./pages/AddStore";
import DeleteStore from "./pages/DeleteStore";
import Signup from "./pages/Signup";
const queryClient = new QueryClient();
function App() {
  const [page, setPage] = useState("baemin");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {page === "baemin" ? <Baemin /> : null}
        {page === "searchpages" ? <Searchpage /> : null}
        {page === "addstore" ? <Addstore /> : null}
        {page === "deletestore" ? <DeleteStore /> : null}
        {page === "signup" ? <Signup /> : null}
        <Footer setPage={setPage} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
