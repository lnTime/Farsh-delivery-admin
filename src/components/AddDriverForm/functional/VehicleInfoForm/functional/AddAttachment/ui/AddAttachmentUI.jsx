import React from 'react';
import styles from './AddAttachment.module.scss';
import { Field } from 'redux-form';
import { TextFieldContainer } from '../../../../../../common/inputs/TextField/functional/TextFieldContainer';
import { FileFieldMiniContainer } from '../../../../../../common/inputs/FileField/functional/FileFieldContainer';

export const AddAttachmentUI = ({ handleCancel, handleFileChange, handleChange }) => {
    return (
        <div className={styles.AddAttachment}>
            <h2 className={styles.AddAttachment__H2}>Add attachment</h2>
            {/* <Field
                placeholder='Title of attachment'
                component={TextFieldContainer}
                type='text'
                name="title"
                onChange={handleChange}
            /> */}
            <div className = {styles.InputWrapper}>
            <input className = {styles.InputBlock}
                placeholder='Title of attachment'
                type="text"
                name="title"
                onChange={handleChange}
            />
            </div>


            
            <div className={styles.Buttons}>
                <button onClick={handleCancel}
                    type="button"
                    className={styles.Buttons__Cancel}>Cancel</button>
                <FileFieldMiniContainer onChange={handleFileChange} />
            </div>
        </div>
    )
}