import React from 'react';
import { driverInfoData } from '../../SearchDriverSection/functional/driverInfoData';
import './searchPhone.scss';


export const SearchPhonUI = () => {
    return (
        <div className="SelectDriver">
            <span className="SelectDriver__Span">Drivers</span>
            {driverInfoData.map((data) => {
                return (
                    <div key={data.id} className="InfoBlock InfoBlock_phonSearch">
                        <div className="InfoWrapper">
                            <div className="DriverPhoto">{data.img}</div>
                            <div>
                                <p className="Mobile">{data.mobile}</p>
                                <span className="NameCarNumber">{data.name}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
            <span className="SelectDriver__Span SelectDriver__Span_moreMargin">Recent</span>
            {driverInfoData.map((data) => {
                return (
                    <div key={data.id} className="InfoWrapper">
                        <div className="DriverPhoto">{data.img}</div>
                        <p className="Mobile">{data.mobile}</p>
                        <span className="NameCarNumber">{data.name}</span>
                    </div>
                );
            }
            )}
        </div>
    )
}