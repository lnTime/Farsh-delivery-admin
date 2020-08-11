import React from "react";
import ProfileFormUI from "../ui/ProfileFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import axios from "axios";

export const ProfileFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();

  const onSubmit = (formData) => {
    console.log(formData);
    const zip = formData.address?.split(' ');
    const zipCodeSplited = zip?.length-1;
    const nameData = formData?.name.split(' ');
    const firstNameSplited = nameData[0];
    const lastNameSplited = nameData[1];
  
    const data = {
      address:{
        address:formData.address,
        city:formData.city,
        country:{
          countryName:formData.country,
          isoCode:'sa'
        },
        state:formData.state,
        zipCode:zipCodeSplited
      },
      firstName:firstNameSplited,
      lastName:lastNameSplited
    }
    console.log("data for profile" , data)


    axios.put(
      `https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/profile/2}`,
      { data}
    );
  };






  const name = "James Anderson",
    mobile = "(497)202-4478",
    country = "Saudi Arabia",
    city = "Makkah",
    state = "Riyadh",
    address = "Centria Mall, Olaya St, Riyadh 12241",
    password = "some password";

  return (
    <ProfileFormUI
      name={name}
      mobile={mobile}
      country={country}
      state={state}
      address={address}
      password={password}
      city={city}
      handleClick={handleClick}
      isEdit={isEdit}
      onSubmit = {onSubmit}
    />
  );
};
