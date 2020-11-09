import React, {useCallback, useEffect, useState} from "react";
import VehicleFormUI from "../ui/VehicleFormUI";
import {useEditMode} from "../../../../common/custom-hooks/useEditMode";
import {useDispatch, useSelector} from "react-redux";
import {getVehicleSelector} from "../../../../../redux/driver/driverSelectors";
import {getAddressSelector} from "../../../../../redux/address/addressSelectors";
import {getCities, getStates} from "../../../../../redux/address/addressActions";
import {updateVehicleInfo} from "../../../../../redux/driver/driverActions";
import {getVehicleBrandsSelector} from "../../../../../redux/static/staticSelectors";
import {getVehicleBrands} from "../../../../../redux/static/staticActions";

export const VehicleFormContainer = ({id}) => {
  const [isEdit, setIsEditMode] = useEditMode();

  const [openAtt, setOpenAtt] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [fileInfo, setFileInfo] = useState([]);
  const [inpValue, setInpValue] = useState('');

  const vehicle = useSelector(getVehicleSelector);
  const address = useSelector(getAddressSelector);
  const vehicleModels = useSelector(getVehicleBrandsSelector);

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(updateVehicleInfo(formData, setIsEditMode, id));
  }

  const customStateChange = (value) => {
    dispatch(getCities(value));
  }

  const customCountryChange = useCallback((value) => {
    dispatch(getStates(value));
  }, [dispatch]);

  const handleAdd = useCallback(() => {
    setOpenAtt(true)
  }, []);

  useEffect(() => {
    if(!vehicleModels.length) {
      dispatch(getVehicleBrands());
    }
  }, [dispatch, vehicleModels])

  return (
    <VehicleFormUI
      onSubmit={onSubmit}
      vehicle={vehicle}
      isEdit={isEdit}
      handleClick={setIsEditMode}
      address={address}
      customStateChange={customStateChange}
      initialValues={{...vehicle}}
      customCountryChange={customCountryChange}
      openAtt={openAtt}
      inpValue={inpValue}
      setDocuments={setDocuments}
      setOpenAtt={setOpenAtt}
      setInpValue={setInpValue}
      fileInfo={fileInfo}
      setFileInfo={setFileInfo}
      handleAdd={handleAdd}
      vehicleModels={vehicleModels}
    />
  );
};
