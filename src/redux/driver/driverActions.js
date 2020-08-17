import { driverConstants } from './driverConstants';
import axios from 'axios';
import { API } from '../../API/index';

export const editProfile = (profile) => ({ type: driverConstants.EDIT_PROFILE, payload: profile })

export const editVendor = (vendor) => ({ type: driverConstants.EDIT_VENDOR, payload: vendor })

export const editRealName = (realName) => ({ type: driverConstants.EDIT_REAL_NAME, payload: realName })

export const editDriverLicense = (driverLicense) => ({ type: driverConstants.EDIT_DRIVER_LICENSE, payload: driverLicense })

export const editVehicle = (vehicle) => ({ type: driverConstants.EDIT_VEHICLE, payload: vehicle })

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
  axios.put(`https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/vendor/2/`, { vendorId: formData.vendor });
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
    `https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/real-name/{2}`, { ...data }
  );
}

export const updateProfile = (data, id) => (dispatch) => {
  const nameData = data.name.split(' ');
  const firstNameSplited = nameData[0];
  const lastNameSplited = nameData[1];
  console.log('Data is: ', data); 
  const formData = new FormData();
  formData.append('address.address', data.address.address);
  formData.append('address.state', data.address.state);
  formData.append('address.city', data.address.city);
  formData.append('address.country.countryName', 'Saudi Arabia');
  formData.append('address.country.isoCode', 'SA');
  formData.append('firstName', firstNameSplited);
  formData.append('lastName', lastNameSplited);
  formData.append('mobileNumber', data.mobileNumber);
  formData.append('password', data.password);
  const formDataQuery = new URLSearchParams(formData).toString();

  API.put(`drivers/profile/${id}?${formDataQuery}`);
}

export const setDriverData = (driver) => ({ type: driverConstants.SET_DRIVER, payload: driver })

export const getDriverData = (id) => (dispatch) => {
  API.get(`drivers/${id}`)
  .then(({data}) => {
    dispatch(setDriverData(data.responseList[0]));
  });
} 
