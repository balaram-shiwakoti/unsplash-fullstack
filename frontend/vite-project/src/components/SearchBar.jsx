// import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../myContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, searchResult, setSearchResult } =
    useContext(MyContext);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/cats/search?label=${searchTerm}`
      );
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
      setSearchResult(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyUp={handleSearch}
        placeholder="search by name"
        value={searchTerm}
        className="border-2 border-black"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchResult && (
        <div className="w-80 h-48">
          <img
            className="mt-10"
            src={searchResult.imgUrl}
            alt="cat-fetched-from-db"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
