import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Pictures from "./components/Pictures";
import { MyContext } from "./myContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  return (
    <MyContext.Provider
      value={{ searchTerm, searchResult, setSearchResult, setSearchTerm }}
    >
      <main className="px-24 py-8">
        <Nav />
        {!searchResult && <Pictures />}
      </main>
    </MyContext.Provider>
  );
}

export default App;
