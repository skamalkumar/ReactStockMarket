import React from "react";
import Card from "./Card";

const Overview = ({ ticker, price, percentage }) => {
  return (
    <Card>
      <div className="inline-block bg-indigo-200 rounded-md absolute top-2">
        <span>{ticker}</span>
      </div>
      <div className="flex justify-around">
        <span>Price: {price}</span>
        <span> Percent Change: {percentage}%</span>
      </div>
    </Card>
  );
};

export default Overview;
