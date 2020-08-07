import React from "react";
import { SelectFieldUI } from "../ui/SelectFieldUI";
import { useEffect, useState } from "react";

export const SelectFieldContainer = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://restcountries-v1.p.rapidapi.com/all", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "c663b9c6f1msh57af889e1c36398p11b164jsne7fde279d469",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData( data.result );
      })
      .then(console.log(data))
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return <SelectFieldUI {...props} />;
};
