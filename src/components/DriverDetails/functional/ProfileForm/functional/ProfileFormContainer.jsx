import React from "react";
import ProfileFormUI from "../ui/ProfileFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch, useSelector } from "react-redux";
import { putProfile } from "../../../../../redux/driver/driverActions";
import { getProfileSelector } from "../../../../../redux/driver/driverSelectors";

export const ProfileFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const dispatch = useDispatch();
  const profile = useSelector(getProfileSelector);
  const onSubmit = (formData) => {
    dispatch(putProfile(formData));
  };

  return (
    <ProfileFormUI
      profile={profile}
      isEdit={isEdit}
      handleClick={handleClick}
      onSubmit={onSubmit}
    />
  );
};
