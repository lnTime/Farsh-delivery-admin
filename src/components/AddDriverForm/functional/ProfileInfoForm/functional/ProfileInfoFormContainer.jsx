import React from "react";
import { ProfileInfoFormUI } from "../ui/ProfileInfoFormUI";
import { reduxForm } from "redux-form";
import { useState, useEffect } from "react";

const ProfileInfoForm = () => {
  const [data, setData] = useState([]);
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
        setData(data.result);
      })
      .then(console.log(data))
      .catch((err) => {
        console.log(err);
      });
  });

  const [phoneNumber, setPhoneNumber] = useState({
    mobileNumber: "",
    isValid: true,
  });

  const onPhoneNumberBlur = (isValid) => {
    setPhoneNumber({ ...phoneNumber, isValid });
  };

  const handlePhoneNumberChange = (isValid, newPhoneNumber) => {
    if (/^[0-9]*$/.test(newPhoneNumber)) {
      setPhoneNumber({ isValid: true, mobileNumber: newPhoneNumber });
    } else {
      setPhoneNumber({ ...phoneNumber, isValid });
    }
  };

  return (
    <ProfileInfoFormUI
      country={data}
      onPhoneNumberBlur={onPhoneNumberBlur}
      phoneNumber={phoneNumber}
      handlePhoneNumberChange={handlePhoneNumberChange}
    />
  );
};

export const ProfileInfoFormContainer = reduxForm({ form: "profile-info" })(
  ProfileInfoForm
);
