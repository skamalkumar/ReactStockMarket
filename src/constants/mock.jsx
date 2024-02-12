export const mockSearchResults = {
  count: 4,
  result: [
    {
      description: "APPLE INC",
      displaySymbol: "AAPL",
      symbol: "AAPL",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "AAPL.SW",
      symbol: "AAPL.SW",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.BE",
      symbol: "APC.BE",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.DE",
      symbol: "APC.DE",
      type: "Common Stock",
    },
  ],
};

export const mockCompanyDetails = {
  country: "US",
  currency: "USD",
  exchange: "NASDAQ/NMS (GLOBAL MARKET)",
  ipo: "1980-12-12",
  marketCapitalization: 1415993,
  name: "Apple Inc",
  phone: "14089961010",
  shareOutstanding: 4375.47998046875,
  ticker: "AAPL",
  weburl: "https://www.apple.com/",
  logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
  finnhubIndustry: "Technology",
};

export const mockStockQuote = {
  c: 261.74,
  h: 263.31,
  l: 260.68,
  o: 261.07,
  pc: 259.45,
  t: 1582641000,
  d: -8.2,
  dp: 1.2,
};

export const mockHistoricalData = {
  series: {
    annual: {
      currentRatio: [
        {
          period: "2019-09-28",
          v: 1.5401,
        },
        {
          period: "2018-09-29",
          v: 1.1329,
        },
      ],
      salesPerShare: [
        {
          period: "2019-09-28",
          v: 55.9645,
        },
        {
          period: "2018-09-29",
          v: 53.1178,
        },
      ],
      netMargin: [
        {
          period: "2019-09-28",
          v: 0.2124,
        },
        {
          period: "2018-09-29",
          v: 0.2241,
        },
      ],
    },
  },
  metric: {
    "10DayAverageTradingVolume": 32.50147,
    "52WeekHigh": 310.43,
    "52WeekLow": 149.22,
    "52WeekLowDate": "2019-01-14",
    "52WeekPriceReturnDaily": 101.96334,
    beta: 1.2989,
  },
  metricType: "all",
  symbol: "AAPL",
};
