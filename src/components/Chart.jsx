import React from "react";
import Card from "./Card";

const Chart = ({ findings }) => {
  return (
    <Card>
      <ul className="w-full h-full flex flex-col divide-y-2 overflow-y-auto">
        {Object.keys(findings || {})?.map((item) => {
          return (
            <li
              key={item}
              className="flex-1 flex justify-between items-center hover:bg-indigo-400 rounded-md"
            >
              <span> {item} </span>
              <span>
                {Math.round(findings[item] * 1e2) / 1e2
                  ? Math.round(findings[item] * 1e2) / 1e2
                  : findings[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Chart;
