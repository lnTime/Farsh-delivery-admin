import { getCountryNameByISOCode } from '../address/addressActions';
import car from '../../assets/images/car.png';

export const getOptions = (arr) => arr.map(value => ({ id: value, value }));

export const getDrivingLicenseData = (formData, countries, image) => {
  const data = new FormData();
  data.append('licenseType', formData.licenseType);
  data.append('licenseNo', formData.licenseNo);
  data.append('licenseIssueDate', formData.licenseIssueDate);
  data.append('licenseExpiryDate', formData.licenseExpiryDate);
  data.append('licenseIssuingCountry.countryName', getCountryNameByISOCode(countries, formData.issuingCountry));
  data.append('licenseIssuingCountry.isoCode', formData.issuingCountry);
  data.append('licenseIssuingAuthority', formData.licenseIssuingAuthority);
  data.append('driverLicenceFrontImgFile', image.front);
  data.append('driverLicenceBackImgFile', image.back);
  return data;
}


export const getDriver = (formData, image, phoneNumber, countries) => {
  const data = new FormData();
  data.append('firstName', formData.firstName);
  data.append('lastName', formData.lastName);
  data.append('profilePicture', image.file);
  data.append('mobileNumber', phoneNumber.mobileNumber);
  data.append('address.state', formData.state.split("-")[1]);
  data.append('address.city', formData.city);
  data.append('address.address', formData.address);
  data.append('address.country.countryName', getCountryNameByISOCode(countries, formData.country));
  data.append('address.country.isoCode', formData.country);
  data.append('password', formData.password);
  return data;
}

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export const getVehicleData = formData => {
  const data = new FormData();
  data.append('mvpiNumber', formData.mvpiNumber);
  data.append('vehicleInsurance.insuranceEndDate', formData.insuranceEndDate);
  data.append('vehicleInsurance.insuranceNumber', formData.insuranceNo);
  data.append('vehicleInsurance.insuranceStartDate', formData.insuranceStartDate);
  data.append('vehicleMake', formData.vehicleMake);
  data.append('vehicleModel', formData.vehicleModel);
  data.append('vehiclePlateNumber', formData.vehiclePlateNumber);
  data.append('vehicleRegistrationNumber', formData.vehicleRegistrationNumber);
  data.append('registrationImg', dataURLtoFile(car, 'image.png'));
  return data;
}
