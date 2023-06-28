import React, { createContext, useState } from "react";
import { Cars } from "../Cars";

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchRes, setSearchRes] = useState([]);

  const handleSearch = (val) => {
    const lowerCSearch = val.toLowerCase();
    const matchedCars = Cars.filter((car) => {
      const lowerCName = car.name.toLowerCase();
      return lowerCName.includes(lowerCSearch);
    });
    setSearchRes(matchedCars);
  };


  return (
    <SearchContext.Provider value={{ handleSearch, searchRes }}>
      {children}
    </SearchContext.Provider>
  );
};

