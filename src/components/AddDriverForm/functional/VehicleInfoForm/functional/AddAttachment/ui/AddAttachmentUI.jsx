import React from 'react';
import styles from './AddAttachment.module.scss';
import { FileFieldMiniContainer } from '../../../../../../common/inputs/FileField/functional/FileFieldContainer';

export const AddAttachmentUI = ({ handleCancel, inputValue, handleFileChange, handleChange, disabled }) => {
    return (
        <div className={styles.AddAttachment}>
            <h2 className={styles['AddAttachment-H2']}>Add attachment</h2>
            <div className = {styles.InputWrapper}>
            <input className = {styles.InputBlock}
                placeholder='Title of attachment'
                type="text"
                name="title"
                onChange={handleChange}
                value={inputValue}
            />
            </div>
            <div className={styles.Buttons}>
                <button onClick={handleCancel}
                    type="button"
                    className={styles.Buttons__Cancel}>Cancel</button>
                <FileFieldMiniContainer 
                    onChange={handleFileChange} 
                    disabled={disabled}
                />
            </div>
        </div>
    )
}