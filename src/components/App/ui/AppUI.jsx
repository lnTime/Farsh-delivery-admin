import React from "react";
import { LoginContainer } from "../../Login/functional/LoginContainer";
import { DriversContainer } from "../../Drivers/functional/DriversContainer";

export const AppUI = () => {
  return (
    <div className="AppUI">
      {/* <LoginContainer/> */}
      <DriversContainer />
    </div>
  );
};
