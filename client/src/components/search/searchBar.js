import { useState } from "react";

const SearchBar=({productList})=> {
  console.log("@", productList)
  const [key, setKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/search/${key}`);
      const data = await response.json();
      console.log(data,"@@")
      setSearchResult(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={key}
          onChange={(event) => setKey(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h1>{searchResult}</h1>
    </div>
  );
}

export default SearchBar