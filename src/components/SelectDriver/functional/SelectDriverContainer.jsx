import React, { useState } from "react";
import { SelectDriverUI } from "../ui/SelectDriverUi";
import { driverInfoData } from "../../SearchDriverSection/functional/driverInfoData";

export const SelectDriverContainer = ({ term }) => {
  
  const lowercasedFilter = term.toLowerCase();
  const filteredData = driverInfoData.filter(item => {
    return Object.keys(item)
    .some(key =>
      item[key].toString().toLowerCase().includes(lowercasedFilter),
      console.log(item)
    );
  });
  return <SelectDriverUI filteredData = {filteredData}/>;
};
