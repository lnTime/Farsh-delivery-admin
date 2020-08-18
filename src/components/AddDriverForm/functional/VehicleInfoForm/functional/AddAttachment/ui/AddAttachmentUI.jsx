import React from 'react';
import styles from './AddAttachment.module.scss';
import { Field } from 'redux-form';
import { TextFieldContainer } from '../../../../../../common/inputs/TextField/functional/TextFieldContainer';
import { FileFieldMiniContainer } from '../../../../../../common/inputs/FileField/functional/FileFieldContainer';

export const AddAttachmentUI = ({handleCancel}) => {
    return (
        <div className={styles.AddAttachment}>
            <h2 className={styles.AddAttachment__H2}>Add attachment</h2>
            <Field
            placeholder = 'Title of attachment'
            component = {TextFieldContainer} 
            type = 'text'
            />
            <div className = {styles.Buttons}>
                <div onClick = {handleCancel} className = {styles.Buttons__Cancel}>Cancel</div>
                <Field

                name="newDoc"
                placeholder="Upload new document"
                component={FileFieldMiniContainer}
                // validate={[validators.required]}
            />
            </div>
        </div>
    )
}