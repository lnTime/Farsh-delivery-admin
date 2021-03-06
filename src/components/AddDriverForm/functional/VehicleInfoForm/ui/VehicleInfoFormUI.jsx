import React from 'react';
import styles from './VehicleInfoForm.module.scss';
import { Field } from 'redux-form';
import { SelectFieldContainer } from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import { TextFieldContainer } from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import { validators } from '../../../../../utils/validators/validators';
import { AddAttachmentContainer } from '../functional/AddAttachment/functional/AddAttachmentContainer'
export const VehicleInfoFormUI = ({ setOpenAtt, handleClick, openAtt, vehicleMakeOptions, address, customCountryChange, customStateChange }) => {
    return (<div className={styles["AddDriver-Form"]}>
        <div className='EvenInputs'>
            <Field
                data-halfwidth
                name="vehiclePlateNumber"
                placeholder="Plate number"
                component={TextFieldContainer}
                validate={[validators.required]}
            />
            <Field
                data-halfwidth
                name="vehicleModel"
                placeholder="Model year"
                component={TextFieldContainer}
                validate={[validators.required]}
            />
        </div>
        <div className='EvenInputs'>
            <Field
                name="vehicleMake"
                placeholder="Make"
                component={SelectFieldContainer}
                options={vehicleMakeOptions}
                validate={[validators.required]}
            />
            <Field
                name="registeredCountry"
                placeholder="Registered Country"
                component={SelectFieldContainer}
                options={address.countries}
                customOnChange={customCountryChange}
                validate={[validators.required]}
            />
        </div>
        <div className='EvenInputs'>
            <Field
                name="state"
                placeholder="State"
                component={SelectFieldContainer}
                options={address.states}
                customOnChange={customStateChange}
                validate={[validators.required]}
            />
            <Field
                name="city"
                placeholder="City"
                component={SelectFieldContainer}
                options={address.cities}
                validate={[validators.required]}
            />
        </div>
        <div className='EvenInputs'>
            <Field
                data-halfwidth
                name="vehicleRegistrationNumber"
                placeholder="Registration No."
                component={TextFieldContainer}
                validate={[validators.required]}
            />
            <Field
                data-halfwidth
                name="mvpiNumber"
                placeholder="MVPI No."
                component={TextFieldContainer}
                validate={[validators.required]}
            />
        </div>

        <div className='EvenInputs'>
            <Field
                data-halfwidth
                name="insuranceNo"
                placeholder="Insurance No."
                component={TextFieldContainer}
                validate={[validators.required]}
            />
            <Field
                data-halfwidth
                name="insuranceStartDate"
                placeholder="Insurance start date"
                component={TextFieldContainer}
                validate={[validators.required]}
            />
        </div>
        <div className='EvenInputs'>
            <Field
                data-halfwidth
                name="insuranceEndDate"
                placeholder="Insurance end date"
                component={TextFieldContainer}
                validate={[validators.required]}
            />
        </div>
        <div className="EvenInputs AddDriver-Form_flex_less_width">
            <span className={styles.AddSpan}>Upload new document</span>
            <div onClick={handleClick} className={styles.AddDoc}>+Add</div>
        </div>
        {openAtt ? <AddAttachmentContainer setOpenAtt = {setOpenAtt} /> : null }
    </div>);
}
