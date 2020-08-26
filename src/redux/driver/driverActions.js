import { driverConstants } from './driverConstants';
import { API } from '../../API/index';
import { SubmissionError } from 'redux-form';
import { getCountryNameByISOCode } from '../address/addressActions';

export const editProfile = (profile) => ({ type: driverConstants.EDIT_PROFILE, payload: profile })

export const editVendor = (vendor) => ({ type: driverConstants.EDIT_VENDOR, payload: vendor })

export const editRealName = (realName) => ({ type: driverConstants.EDIT_REAL_NAME, payload: realName })

export const editDriverLicense = (driverLicense) => ({ type: driverConstants.EDIT_DRIVER_LICENSE, payload: driverLicense })

export const editVehicle = (vehicle) => ({ type: driverConstants.EDIT_VEHICLE, payload: vehicle })

const getDrivingLicenseData = (formData, countries, image) => {
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

export const updateDrivingLicense = (formData, image, setImage, countries, setCurrentStep) => (dispatch, getState) => {
  const id = getState().driver.id;
  if (!image.isFrontChoosed) {
    setImage({ ...image, hasFrontError: true })
    return false;
  } else if (!image.isBackChoosed) {
    setImage({ ...image, hasBackError: true })
    return false;
  }

  const data = getDrivingLicenseData(formData, countries, image);

  API.post(`drivers/driving-license/${id}`, data)
  .then(result => {
    setCurrentStep(currentStep => currentStep + 1);
  });
};

export const setDrivingLicense = (drivingLicense) => ({ type: driverConstants.SET_DRIVING_LICENSE, payload: drivingLicense});

export const updateDrivingLicenseByID = (formData, id, countries, setImageHasError, handleEditModeChange) => (dispatch) => {
  if(!formData.driverLicenceFrontImgFile) {
    setImageHasError(prev => ({...prev, front: true}));
    return false;
  } else if (!formData.driverLicenceBackImgFile) {
    setImageHasError(prev => ({...prev, back: true}));
    return false;
  } else {
    setImageHasError({back: false, front: false});
  }

  formData.licenseIssuingCountry.countryName = getCountryNameByISOCode(countries, formData.licenseIssuingCountry.isoCode);
  const data = new FormData();
  data.append('driverLicenceFrontImgFile', formData.driverLicenceFrontImgFile);
  data.append('driverLicenceBackImgFile', formData.driverLicenceBackImgFile)
  data.append('licenseExpiryDate', formData.licenseExpiryDate);
  data.append('licenseIssueDate', formData.licenseIssueDate);
  data.append('licenseIssuingAuthority', formData.licenseIssuingAuthority);
  data.append('licenseIssuingCountry.countryName', formData.licenseIssuingCountry.countryName);
  data.append('licenseIssuingCountry.isoCode', formData.licenseIssuingCountry.isoCode);
  data.append('licenseNo', formData.licenseNo);
  data.append('licenseType', formData.licenseType);
  API.post(`drivers/driving-license/${id}`, data)
  .then((result) => {
    dispatch(setDrivingLicense(result.data));
    handleEditModeChange();
  });
}

export const setVendor = (vendorId) => ({ type: driverConstants.SET_VENDOR, payload: vendorId});

export const updateVendor = (formData, id, setIsEditMode) => (dispatch) => {
  const data = new FormData();
  data.append('vendorId', formData.vendorId);
  API.post(`drivers/vendor/${id}`, data)
  .then(result => {
    dispatch(setVendor(result.data))
    setIsEditMode(false);
  });
}

export const updateVendorCreate = (formData, setCurrentStep) => (dispatch, getState) => {
  const id = getState().driver.id;
  const data = new FormData();
  data.append('vendorId', formData.vendorId);
  API.post(`drivers/vendor/${id}`, data)
  .then(() => {
    setCurrentStep(currentStep => currentStep + 1);
  });
}

export const updateRealNameInformation = (formData, image, setImage, setCurrentStep, countries) => (dispatch, getState) => {
  if (!image.isFrontChoosed) {
    setImage({ ...image, hasFrontError: true })
    return false;
  } else if (!image.isBackChoosed) {
    setImage({ ...image, hasBackError: true })
    return false;
  }
  const id = getState().driver.id;
  const data = new FormData();
  data.append('realNameIdType', formData.realNameIdType);
  data.append('realNameIdNo', formData.realNameIdNo);
  data.append('realNameIssueDate', formData.realNameIssueDate);
  data.append('realNameExpiryDate', formData.realNameExpiryDate);
  data.append('realNameIssueCountry.countryName', getCountryNameByISOCode(countries, formData.issuingCountry));
  data.append('realNameIssueCountry.isoCode', formData.issuingCountry);
  data.append('realNameIssueAuthority', formData.issuingAuthority);
  data.append('idImgFront', image.front);
  data.append('idImgBack', image.back);

  API.post(`drivers/real-name/${id}`, data)
    .then(result => {
      setCurrentStep(currentStep => currentStep + 1);
    });
}
export const setDriverData = (driver) => ({ type: driverConstants.SET_DRIVER, payload: driver })

export const getDriverData = (id) => (dispatch) => {
  API.get(`drivers/${id}`)
    .then(({ data }) => {
      dispatch(setDriverData(data.responseList[0]));
    });
}

export const setDriver = (driver) => ({ type: driverConstants.SET_DRIVER, payload: driver })

const getDriver = (formData, image, phoneNumber, countries) => {
  const data = new FormData();
  data.append('firstName', formData.firstName);
  data.append('lastName', formData.lastName);
  data.append('profilePicture', image.file);
  data.append('mobileNumber', phoneNumber.mobileNumber);
  data.append('address.state', formData.state);
  data.append('address.city', formData.city);
  data.append('address.address', formData.address);
  data.append('address.country.countryName', getCountryNameByISOCode(countries, formData.country));
  data.append('address.country.isoCode', formData.country);
  data.append('password', formData.password);
  return data;
}

export const createDriver = (formData, setPhoneNumber, phoneNumber, image, setImage, countries, setCurrentStep) => (dispatch) => {
  if (formData.password !== formData.confirmPassword) {
    throw new SubmissionError({ confirmPassword: 'Please confirm the password.' })
  }

  if (!image) {
    setImage({ hasError: true });
    return false;
  }

  if (!phoneNumber.mobileNumber || !phoneNumber.isValid) {
    setPhoneNumber({ ...phoneNumber, isValid: false });
    return false;
  }

  const data = getDriver(formData, image, phoneNumber, countries);
  API.post(`drivers/`, data)
    .then((result) => {
      setCurrentStep(currentStep => currentStep + 1);
      dispatch(setDriver(result.data))
    });
}

export const updateVehicleInfo = (formData) => (dispatch, getState) => {
  // const id = getState().driver.id;
  const data = new FormData();
  data.append('mvpiNumber', formData.mvpiNumber);
  data.append('vehicleInsurance.insuranceEndDate', formData.insuranceEndDate);
  data.append('vehicleInsurance.insuranceNumber	', formData.insuranceNo);
  data.append('vehicleInsurance.insuranceStartDate', formData.insuranceStartDate);
  data.append('vehicleMake', formData.vehicleMake);
  data.append('vehicleModel	', formData.vehicleModel);
  data.append('vehiclePlateNumber', formData.vehiclePlateNumber);
  data.append('vehicleRegistrationNumber',formData.vehicleRegistrationNumber )
}

const setProfile = (profile) => ({ type: driverConstants.SET_PROFILE, payload: profile});

export const updateProfile = (formData, id, image, phoneNumber, countries, setImage, isPhoneNumberValid, setIsEditMode) => (dispatch, getState) => {
  if(!isPhoneNumberValid) {
    return false;
  }
  if(!image || !image.file) {
    setImage({hasError: true});
    return false;
  }
  const data = getDriver(formData, image, phoneNumber, countries);
  data.delete('firstName');
  data.delete('lastName');
  const name = formData.name.split(' ');
  data.append('firstName', name[0]);
  data.append('lastName', name[1]);
  API.post(`drivers/profile/${id}`, data)
    .then(result => {
      dispatch(setProfile(result.data));
      setIsEditMode(false);
    });
}

export const activateDriver = (formData, activated) => (dispatch, getState) => {
  const id = getState().driver.id;
  const data = new FormData();
  data.append('activation.activeFrom', formData.activationStartDate);
  data.append('activation.activeTo', formData.activationEndDate);
  data.append('activation.active', activated);
  API.post(`drivers/activation/${id}`, data)
  .then(console.log);
}

export const updateRealNameInformationByID = (formData, id, countries, imageHasError, setImageHasError) => (dispatch) => {
  if (!(formData.idImgBack[0] instanceof File)) {
    setImageHasError(prev => ({...prev, back: true}));
    return false;
  } else if(!(formData.idImgFront[0] instanceof File)) {
    setImageHasError(prev => ({...prev, front: true}));
    return false;
  } else {
    setImageHasError({back: false, front: false});
  }

  const data = new FormData();
  data.append('realNameExpiryDate', formData.realNameExpiryDate);
  data.append('realNameIdNo', formData.realNameIdNo);
  data.append('realNameIdType', formData.realNameIdType);
  data.append('realNameIssueAuthority', formData.realNameIssueAuthority);
  data.append('realNameIssueCountry.countryName', getCountryNameByISOCode(countries, formData.realNameIssueCountry));
  data.append('realNameIssueCountry.isoCode', formData.realNameIssueCountry);
  data.append('realNameIssueDate', formData.realNameIssueDate);
  data.append('idImgBack', formData.idImgBack[0]);
  data.append('idImgFront', formData.idImgFront[0]);
  API.post(`drivers/real-name/${id}`, data);
}
