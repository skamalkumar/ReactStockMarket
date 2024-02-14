import React, { useContext } from "react";
import StockContext from "../context/StockContext";

const SearchResults = ({ results }) => {
  const { setStockSymbol } = useContext(StockContext);

  return (
    <ul className="w-full h-24 absolute top-12 border-2 rounded-md z-50 items-center overflow-y-scroll bg-white transition duration-300">
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className="cursor-pointer flex justify-between p-2 m-2 rounded-md hover:bg-indigo-200 transition1 duration1"
            onClick={() => setStockSymbol(item.symbol)}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
