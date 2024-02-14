import React from "react";
import Card from "./Card";

const Details = ({ details }) => {
  const detailsList = {
    ticker: "Ticker",
    name: "Name",
    country: "Country",
    marketCapitalization: "Market Capitalization",
    exchange: "Exchange",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul className=" w-full h-full flex flex-col divide-y-2  overflow-y-scroll md:overflow-hidden">
        {Object.keys(detailsList).map((item) => {
          return (
            <li
              key={item}
              className="flex-1 flex justify-between items-center hover:bg-indigo-400 rounded-md "
            >
              <span>{detailsList[item]}</span>
              <span>
                {item === "marketCapitalization"
                  ? `$${convertMillionToBillion(details[item])} B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
