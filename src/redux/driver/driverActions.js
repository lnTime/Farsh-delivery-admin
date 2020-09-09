import { driverConstants } from './driverConstants';
import { API } from '../../API/index';
import { SubmissionError } from 'redux-form';
import { getCountryNameByISOCode } from '../address/addressActions';
import axios from 'axios';
import {getOptions, getDrivingLicenseData, getVehicleData, getDriver} from './driverHelpers';
import {globalErrorHandler} from '../common/helpers/global-error-handler';

/* 
    REDUX ACTIONS (PURE)
*/

export const editProfile = (profile) => ({ type: driverConstants.EDIT_PROFILE, payload: profile })

export const editVendor = (vendor) => ({ type: driverConstants.EDIT_VENDOR, payload: vendor })

export const editRealName = (realName) => ({ type: driverConstants.EDIT_REAL_NAME, payload: realName })

export const editDriverLicense = (driverLicense) => ({ type: driverConstants.EDIT_DRIVER_LICENSE, payload: driverLicense })

export const editVehicle = (vehicle) => ({ type: driverConstants.EDIT_VEHICLE, payload: vehicle })

export const setDrivingLicense = (drivingLicense) => ({ type: driverConstants.SET_DRIVING_LICENSE, payload: drivingLicense });

export const setVendor = (vendorId) => ({ type: driverConstants.SET_VENDOR, payload: vendorId });

export const setProfileAvatar = (src) => ({ type: driverConstants.SET_PROFILE_AVATAR, payload: src })

export const setDriverData = (driver) => ({ type: driverConstants.SET_DRIVER, payload: driver })

export const setDriver = (driver) => ({ type: driverConstants.SET_DRIVER, payload: driver })

export const setVehicleInfo = (vehicle) => ({ type: driverConstants.SET_VEHICLE_INFO, payload: vehicle });

export const setProfile = (profile) => ({ type: driverConstants.SET_PROFILE, payload: profile });


export const setRealNameInformation = realNameInformation => 
({ type: driverConstants.SET_REAL_NAME_INFORMATION, payload: realNameInformation })
/* 
    END REDUX ACTIONS (PURE)
*/

/* 
    GET ACTIONS (REDUX THUNK)
*/
export const getProfilePicture = fileKey => dispatch => {
  axios.get(`https://cdn57.androidauthority.net/wp-content/uploads/2017/11/Google-search-curved-840x446.png`, {
    responseType: 'blob'
  })
    .then(res => {
      const urlCreator = window.URL || window.webkitURL;
      const imageUrl = urlCreator.createObjectURL(res.data);
      dispatch(setProfileAvatar(imageUrl));
      window.blob = res.data;
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const getVehicleMakes = (setVehicleMakes) => dispatch => {
  API.get(`static/vehicle/vehicle-makes`)
  .then(({data}) => {
      setVehicleMakes(getOptions(data));
  }).catch(err => dispatch(globalErrorHandler(err)));;
}

export const getIssuingAuthorities = (setIssuingAuthorities) => dispatch => {
  API.get(`static/real-name/issuing-authority`)
  .then(({data}) => {
    setIssuingAuthorities(getOptions(data));
  }).catch(err => dispatch(globalErrorHandler(err)));;
}

export const getDriverData = (id) => (dispatch) => {
  API.get(`drivers/${id}`)
    .then(({ data }) => {
      const driver = data.responseList[0];
      dispatch(setDriverData(driver));
      dispatch(getProfilePicture(driver.profile?.attachments[0].fileKey))
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const getDrivingLicenseTypes = (setDrivingLicenseTypes) => dispatch => {
  API.get(`static/driving-license/types`)
  .then(({data}) => {
    setDrivingLicenseTypes(getOptions(data));
  }).catch(err => dispatch(globalErrorHandler(err)));
}

export const getDrivingLicenseIssuingAuthority = (setDrivingLicenseIssuingAuthority) => dispatch => {
  API.get(`static/driving-license/issuing-authority`)
  .then(({data}) => {
    setDrivingLicenseIssuingAuthority(getOptions(data));
  }).catch(err => dispatch(globalErrorHandler(err)));
}

/* 
    END GET ACTIONS (REDUX THUNK)
*/

/* 
  POST ACTIONS (REDUX THUNK)
*/

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
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const createVehicleInfo = (formData, documents) => (dispatch, getState) => {
  const id = getState().driver.id;
  const data = getVehicleData(formData);
  window.documents = documents;
  for (let i = 0; i < documents.length; i++) {
    const att = `attachments[${i}].`;
    data.append(`${att}attachmentType`, 'VEHICLE_REG');
    data.append(`${att}fileKey`, documents[i].file.name);
    data.append(`${att}fileType`, documents[i].file.type);
    data.append(`${att}name`, documents[i].name);
  }
  API.post(`drivers/vehicle/${id}`, data)
    .then((res) => {
      console.log(res);
    }).catch(err => dispatch(globalErrorHandler(err)))
}


/* 
  END POST ACTIONS(REDUX THUNK)
*/

/* 
  UPDATE ACTIONS (REDUX THUNK)
*/

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
    }).catch(err => dispatch(globalErrorHandler(err)));
};


export const updateDrivingLicenseByID = (formData, id, countries, setImageHasError, handleEditModeChange) => (dispatch) => {
  if (!formData.driverLicenceFrontImgFile) {
    setImageHasError(prev => ({ ...prev, front: true }));
    return false;
  } else if (!formData.driverLicenceBackImgFile) {
    setImageHasError(prev => ({ ...prev, back: true }));
    return false;
  } else {
    setImageHasError({ back: false, front: false });
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
    }).catch(err => dispatch(globalErrorHandler(err)));
}


export const updateVendor = (formData, id, setIsEditMode) => (dispatch) => {
  const data = new FormData();
  data.append('vendorId', formData.vendorId);
  API.post(`drivers/vendor/${id}`, data)
    .then(result => {
      dispatch(setVendor(result.data))
      setIsEditMode(false);
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const updateVendorCreate = (formData, setCurrentStep) => (dispatch, getState) => {
  const id = getState().driver.id;
  const data = new FormData();
  data.append('vendorId', formData.vendorId);
  API.post(`drivers/vendor/${id}`, data)
    .then(() => {
      setCurrentStep(currentStep => currentStep + 1);
    }).catch(err => dispatch(globalErrorHandler(err)));
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
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const updateVehicleInfo = (formData, setIsEditMode, id) => (dispatch, getState) => {
  const data = getVehicleData(formData);
  API.post(`drivers/vehicle/${id}`, data)
    .then(result => {
      dispatch(setVehicleInfo(result.data));
      setIsEditMode(false);
    }).catch(err => dispatch(globalErrorHandler(err)));
}


export const updateProfile = (formData, id, image, phoneNumber, countries, setImage, isPhoneNumberValid, setIsEditMode) => (dispatch, getState) => {
  if (!isPhoneNumberValid) {
    return false;
  }
  if (!image || !image.file) {
    setImage({ hasError: true });
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
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const activateDriver = (formData, activated) => (dispatch, getState) => {
  const id = getState().driver.id;
  const data = new FormData();
  data.append('activation.activeFrom', formData.activationStartDate);
  data.append('activation.activeTo', formData.activationEndDate);
  data.append('activation.active', activated);
  API.post(`drivers/activation/${id}`, data)
    .then(console.log).catch(err => dispatch(globalErrorHandler(err)));
}

export const updateRealNameInformationByID = (formData, id, countries, imageHasError, setImageHasError, setIsEditMode) => (dispatch) => {
  if (!(formData.idImgBack instanceof File)) {
    setImageHasError(prev => ({ ...prev, back: true }));
    return false;
  } else if (!(formData.idImgFront instanceof File)) {
    setImageHasError(prev => ({ ...prev, front: true }));
    return false;
  } else {
    setImageHasError({ back: false, front: false });
  }
  const data = new FormData();
  data.append('realNameExpiryDate', formData.realNameExpiryDate);
  data.append('realNameIdNo', formData.realNameIdNo);
  data.append('realNameIdType', formData.realNameIdType);
  data.append('realNameIssueAuthority', formData.realNameIssueAuthority);
  data.append('realNameIssueCountry.countryName', getCountryNameByISOCode(countries, formData.realNameIssueCountry));
  data.append('realNameIssueCountry.isoCode', formData.realNameIssueCountry);
  data.append('realNameIssueDate', formData.realNameIssueDate);
  data.append('idImgBack', formData.idImgBack);
  data.append('idImgFront', formData.idImgFront);
  API.post(`drivers/real-name/${id}`, data)
    .then(result => {
      dispatch(setRealNameInformation(result.data));
      setIsEditMode(false);
    }).catch(err => dispatch(globalErrorHandler(err)));
}

/*
  END UPDATE ACTIONS (REDUX THUNK)
*/ 

/* 
dispatch(openNotification({
            type: 'success',
            content: {
                title: 'James Anderson has been added successfully',
                description: 'Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metus. Curabitur nulla nisi, lacinia at lobortis at, suscipit at nibh. Proin quis lectus finibus, mollis purus vitae, rutrum neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sed cursus metus, vel viverra mi. Mauris aliquet egestas eros ac placerat. Proin condimentum ligula at diam euismod fringilla et quis lacus.',
                additionalComponent: {
                    handler: () => {}
                }
            }
        }));
        */