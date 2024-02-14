import Header from "./Header";
// import { mockCompanyDetails, mockHistoricalData } from "../constants/mock";
import Details from "./Details";
import Overview from "./Overview";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Chart from "./Chart";
import StockContext from "../context/StockContext";
import {
  fetchStockDetails,
  fetchQuote,
  fetchFinancials,
} from "../api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});
  const [financial, setFinancial] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };
    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    const updateStockMetric = async () => {
      try {
        const result = await fetchFinancials(stockSymbol);
        setFinancial(result);
      } catch (error) {
        setFinancial({});
        console.log(error);
      }
    };
    updateStockDetails();
    updateStockOverview();
    updateStockMetric();
  }, [stockSymbol]);

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-5 md:grid-rows-4 xl:grid-rows-3 auto-rows-fr bg-white gap-4 p-10 
      ${darkMode ? "light" : "dark"}`}
    >
      <div className="header col-span-1 xl:col-span-3 row-span-1 flex items-center">
        <Header name={stockDetails.name}></Header>
      </div>
      <div className="chart md:col-span-2 row-span-5 mt-10 ">
        <Chart findings={financial.metric}>Chart</Chart>
      </div>
      <div className="details">
        <Overview price={quote.pc} percentage={quote.d} ticker={stockSymbol}>
          Details
        </Overview>
      </div>
      <div className=" overview row-span-4 xl:row-span-4 mt-5 auto-rows-fr">
        <Details details={stockDetails}></Details>
      </div>
    </div>
  );
};

export default Dashboard;
