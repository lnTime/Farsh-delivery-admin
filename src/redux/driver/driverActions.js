import { driverConstants } from './driverConstants';
import { API } from '../../API/index';
import { SubmissionError } from 'redux-form';
import { getCountryNameByISOCode } from '../address/addressActions';
import { getOptions, getDrivingLicenseData, getVehicleData, getDriver, makeImageURL } from './driverHelpers';
import { globalErrorHandler } from '../common/helpers/global-error-handler';
import { batch } from 'react-redux';
import { openNotification } from '../notification/notificationActions';

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


export const setRealNameFrontImage = (src) => ({ type: driverConstants.SET_REAL_NAME_FRONT_IMAGE, payload: src })

export const setRealNameBackImage = (src) => ({ type: driverConstants.SET_REAL_NAME_BACK_IMAGE, payload: src })

export const setDrivingLicenseFrontImage = (src) => ({ type: driverConstants.SET_DRIVING_LICENSE_FRONT_IMAGE, payload: src })

export const setDrivingLicenseBackImage = (src) => ({ type: driverConstants.SET_DRIVING_LICENSE_BACK_IMAGE, payload: src });
/* 
    END REDUX ACTIONS (PURE)
*/

/* 
    GET ACTIONS (REDUX THUNK)
*/
export const getAndDispatchPicture = (fileKey, fn) => dispatch => {
  API.get(`storage/resource/${fileKey}`, {
    responseType: 'blob'
  })
    .then(makeImageURL)
    .then(imageURL => dispatch(fn(imageURL)))
    .catch(err => dispatch(globalErrorHandler(err)));
}

export const getAndDispatchDocuments = (documents, fn) => dispatch => {
  const promiseList = documents.map(document => API.get(`storage/resource/${document.fileKey}`, {
    responseType: 'blob'
  }));
  console.log('started');
  Promise.all(promiseList).then(console.log);

}

export const getVehicleMakes = (setVehicleMakes) => dispatch => {
  API.get(`static/vehicle/vehicle-makes`)
    .then(({ data }) => {
      setVehicleMakes(getOptions(data));
    }).catch(err => dispatch(globalErrorHandler(err)));;
}

export const getIssuingAuthorities = (setIssuingAuthorities) => dispatch => {
  API.get(`static/real-name/issuing-authority`)
    .then(({ data }) => {
      setIssuingAuthorities(getOptions(data));
    }).catch(err => dispatch(globalErrorHandler(err)));;
}

export const getDriverData = (id) => (dispatch) => {
  API.get(`drivers/${id}`)
    .then(({ data }) => {
      const driver = data.responseList[0];
      batch(() => {
        dispatch(setDriverData(driver));
        dispatch(getAndDispatchPicture(driver.profile?.attachments[0].fileKey, setProfileAvatar))
      })


      const realNameAttachments = driver.realNameInformation?.attachments;
      if (realNameAttachments) {
        for (let i = 0; i < realNameAttachments.length; i++) {
          if (realNameAttachments[i].attachmentType === 'REAL_NAME_FRONT') {
              dispatch(getAndDispatchPicture(realNameAttachments[i].fileKey, setRealNameFrontImage))
          } else if (realNameAttachments[i].attachmentType === 'REAL_NAME_BACK') {
              dispatch(getAndDispatchPicture(realNameAttachments[i].fileKey, setRealNameBackImage));
          }
        }
      }

      const drivingLicenseAttachments = driver.drivingLicense?.attachments;
      if(drivingLicenseAttachments) {
        for (let i = 0; i < drivingLicenseAttachments.length; i++) {
          if (drivingLicenseAttachments[i].attachmentType === 'DRIVING_LICENSE_FRONT') {
              dispatch(getAndDispatchPicture(drivingLicenseAttachments[i].fileKey, setDrivingLicenseFrontImage))
          } else if (drivingLicenseAttachments[i].attachmentType === 'DRIVING_LICENSE_BACK') {
              dispatch(getAndDispatchPicture(drivingLicenseAttachments[i].fileKey, setDrivingLicenseBackImage));
          }
        }
      }

      const vehicleAttachments = driver.vehicle?.attachments;
      if(vehicleAttachments) {
        dispatch(getAndDispatchDocuments(vehicleAttachments))
      }


    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const getDrivingLicenseTypes = (setDrivingLicenseTypes) => dispatch => {
  API.get(`static/driving-license/types`)
    .then(({ data }) => {
      setDrivingLicenseTypes(getOptions(data));
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const getDrivingLicenseIssuingAuthority = (setDrivingLicenseIssuingAuthority) => dispatch => {
  API.get(`static/driving-license/issuing-authority`)
    .then(({ data }) => {
      setDrivingLicenseIssuingAuthority(getOptions(data));
    }).catch(err => dispatch(globalErrorHandler(err)));
}

/* 
    END GET ACTIONS (REDUX THUNK)
*/

/* 
  POST ACTIONS (REDUX THUNK)
*/

export const createDriver = (formData, image, setImage, countries, setCurrentStep) => (dispatch) => {
  if (formData.password !== formData.confirmPassword) {
    throw new SubmissionError({ confirmPassword: 'Please confirm the password.' })
  }

  if (!image) {
    setImage({ hasError: true });
    return false;
  }

  const data = getDriver(formData, image, countries);
  API.post(`drivers/`, data)
    .then((result) => {
      setCurrentStep(currentStep => currentStep + 1);
      dispatch(setDriver(result.data))
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const createVehicleInfo = (formData, documents, setCurrentStep) => (dispatch, getState) => {
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
      setCurrentStep(currentStep => currentStep + 1);
    }).catch(err => dispatch(globalErrorHandler(err)))
}


/* 
  END POST ACTIONS(REDUX THUNK)
*/

/* 
  UPDATE ACTIONS (REDUX THUNK)
*/

export const updateDrivingLicense = (formData, countries, setCurrentStep) => (dispatch, getState) => {
  const id = getState().driver.id;
  const data = getDrivingLicenseData(formData, countries);

  API.post(`drivers/driving-license/${id}`, data)
    .then(result => {
      setCurrentStep(currentStep => currentStep + 1);
    }).catch(err => dispatch(globalErrorHandler(err)));
};


export const updateDrivingLicenseByID = (formData, id, countries, handleEditModeChange) => (dispatch) => {

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

export const updateRealNameInformation = (formData, setCurrentStep, countries) => (dispatch, getState) => {
  const id = getState().driver.id;
  const data = new FormData();
  data.append('realNameIdType', formData.realNameIdType);
  data.append('realNameIdNo', formData.realNameIdNo);
  data.append('realNameIssueDate', formData.realNameIssueDate);
  data.append('realNameExpiryDate', formData.realNameExpiryDate);
  data.append('realNameIssueCountry.countryName', getCountryNameByISOCode(countries, formData.issuingCountry));
  data.append('realNameIssueCountry.isoCode', formData.issuingCountry);
  data.append('realNameIssueAuthority', formData.issuingAuthority);
  data.append('idImgFront', formData.front);
  data.append('idImgBack', formData.back);

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


export const updateProfile = (formData, id, image, countries, setImage, setIsEditMode) => (dispatch, getState) => {
  if (!image || !image.file) {
    setImage({ hasError: true });
    return false;
  }
  const data = getDriver(formData, image, countries);
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

export const activateDriver = (formData, activated, updateHistory, goToDriver) => (dispatch, getState) => {
  const driver = getState().driver;
  const id = driver.id;
  const name = `${driver.profile.firstName} ${driver.profile.lastName}`;
  const data = new FormData();
  data.append('activeFrom', formData.activationStartDate);
  data.append('activeTo', formData.activationEndDate);
  data.append('activation.active', activated);
  API.post(`drivers/activation/${id}`, data)
    .then(() => {
      dispatch(openNotification({
        type: 'success',
        content: {
            title: `${name} has been added successfully`,
            description: 'Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas.',
            additionalComponent: {
              handler: () => goToDriver(id)
            }
        }
      }))
      updateHistory();
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const updateRealNameInformationByID = (formData, id, countries, setIsEditMode) => (dispatch) => {
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