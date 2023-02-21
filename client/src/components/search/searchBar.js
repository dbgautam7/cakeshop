import { useState } from "react";
import { FiKey } from "react-icons/fi";

const SearchBar=({productList})=> {
  debugger
  console.log("@", productList)
  const [key, setKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/search/${key}`);
      const data = await response.json();
      console.log(data,"@@")
      // setSearchResult(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={()=>handleSearch()}>
        <input
          type="text"
          value={key}
          onChange={(event) => setKey(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {/* {productList.filter((item,id) => {
            if (key === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(key.toLowerCase())
            ) {
              return item;
            } else {
              return "";
            }
          })} */}
    </div>
  );
}

export default SearchBar
