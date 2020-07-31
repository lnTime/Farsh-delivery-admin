import React from "react";
import { LoginContainer } from "../../Login/functional/LoginContainer";
import { DriversContainer } from "../../Drivers/functional/DriversContainer";
import { SearchDriverContainer } from "../../SearchDriverSection/functional/SearchDriverSectionContainer";

export const AppUI = () => {
  return (
    <div className="AppUI">
      {/* <DriversContainer /> */}
      <SearchDriverContainer />
    </div>
  );
};
