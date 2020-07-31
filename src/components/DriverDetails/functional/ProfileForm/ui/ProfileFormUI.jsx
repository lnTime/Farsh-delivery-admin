import React from 'react';
import './ProfileForm.scss';
import {FormHeaderContainer} from '../../FormHeader/functional/FormHeaderContainer';
import Avatar from '../../../../../assets/avatars/avatar-80.png';

export const ProfileFormUI = ({name, mobile, country, state, city, address, password}) => {
    return (<div className="ProfileForm">
        <FormHeaderContainer formName="Profile"/>
        <div className="ProfileFormAvatar">
            <img alt="Avatar" src={Avatar} />
            <div className="ProfileFormInfo">
                <span className="ProfileFormAvatar-name_name">Name</span>
                <span className="ProfileFormAvatar-name">{name}</span>
            </div>
        </div>
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">Mobile</span>
                <span className="ProfileInfoBlock-InputValue">{mobile}</span>
            </div>
            <div>
                <span className="ProfileInfoBlock-InputName">Country</span>
                <span className="ProfileInfoBlock-InputValue">{country}</span>
            </div>
        </div>
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">State</span>
                <span className="ProfileInfoBlock-InputValue">{state}</span>
            </div>
            <div>
                <span className="ProfileInfoBlock-InputName">City</span>
                <span className="ProfileInfoBlock-InputValue">{city}</span>
            </div>
        </div>
        <div  className="ProfileInfoBlock ProfileInfoBlock_oneItem">
            <span className="ProfileInfoBlock-InputName">Address</span>
            <span className="ProfileInfoBlock-InputValue">{address}</span>
        </div>
        <div  className="ProfileInfoBlock ProfileInfoBlock_oneItem">
            <span className="ProfileInfoBlock-InputName">Password</span>
            <div className="Password">
                {password.split('').map((v, index) => 
                    <div className="ProfileInfoBlock-InputValue_cycle" key={index}></div>)}    
            </div>
        </div>
    </div>);
}