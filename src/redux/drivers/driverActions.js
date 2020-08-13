import {driverConstants} from './driverConstants';
import axios from 'axios';

export const editProfile = (profile) => ({type:driverConstants.EDIT_PROFILE, payload:profile})

export const editVendor = (vendor) => ({type:driverConstants.EDIT_VENDOR,payload:vendor})

export const editRealName = (realName) => ({type:driverConstants.EDIT_REAL_NAME,payload:realName})

export const editDriverLicense = (driverLicense) => ({type:driverConstants.EDIT_DRIVER_LICENSE,payload:driverLicense})

export const editVehicle = (vehicle) => ({type:driverConstants.EDIT_VEHICLE,payload:vehicle})

export const putDriverLicense = (formData) => (dispatch) => {
    const data = {
      licenseExpiryDate: formData.expiryDate,
      licenseIssueDate: formData.issueDate,
      licenseIssuingAuthority: formData.issuingAuthority,
      licenseIssuingCountry: {
        countryName: formData.issuingCountry,
        isoCode: 'sa'
      },
      licenseNo: formData.licenseNumber,
      licenseType: formData.licenseType
    }
    axios.put(
      `https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/driving-license/{2}`,
      { ...data }
    );
  };

  export const putVendor = (formData) => (dispatch) => {
    axios.put(`https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/vendor/2/`,{ vendorId: formData.vendor});
  }

  export const putRealName = (formData) => (dispatch) => {
    const data = {
      realNameExpiryDate: formData.expiryDate,
      realNameIdNo: formData.idNumber,
      realNameIdType: formData.idCard,
      realNameIssueAuthority: formData.issuingAuthority,
      realNameIssueCountry: {
        countryName: formData.issuingCountry,
        isoCode: "sa",
      },
      realNameIssueDate: formData.issueDate,
    };
    axios.put(
      `https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/real-name/{2}`,{...data}
    );
  }
  
  export const putProfile = (formData) => (dispatch) => {
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
    axios.put(
      `https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/profile/2}`,
      {...data}
    );
  }