import React from "react";
const basePath = "https://finnhub.io/api/v1";

export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${"clpgeo1r01qjqid2brs0clpgeo1r01qjqid2brsg"}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `you have got error ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${"clpgeo1r01qjqid2brs0clpgeo1r01qjqid2brsg"}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `you have got error ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=${"clpgeo1r01qjqid2brs0clpgeo1r01qjqid2brsg"}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `you have got error ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchFinancials = async (stockSymbol) => {
  const url = `${basePath}/stock/metric?symbol=${stockSymbol}&token=${"clpgeo1r01qjqid2brs0clpgeo1r01qjqid2brsg"}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `you have got error ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};
