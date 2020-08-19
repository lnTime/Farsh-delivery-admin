import React from 'react';
import { NewDriverSectionsContainer } from '../functional/NewDriverSections/functional/NewDriverSectionsContainer';
import {reduxForm} from 'redux-form'
import styles from './AddDriverForm.module.scss';
import { HeaderTopContainer } from '../../HeaderTop/functional/HeaderTopContainer';

export const AddDriverForm = React.memo(({ handleSubmit, onSubmit, Component, activeID, invalid, pristine, submitting, ...all }) => {
    return (
        <div className={styles.AddDriver}>
            <HeaderTopContainer />
            <NewDriverSectionsContainer activeID={activeID}/>
            <form className={styles.Wrapper} onSubmit={handleSubmit}>
                <Component {...all}/>
                <div className={styles.Submission}>
                    <button className={`${styles['Submission-button']} ${styles['Submission-button_white']}`}>Cancel</button>
                    <button
                        type="button"
                        className={`${styles['Submission-button']} ${styles['Submission-button_black']}`}
                        disabled={invalid || submitting || pristine}
                        type="submit">{activeID === 6 ? 'Finish' : 'Next'}</button>
                </div>
            </form>
        </div>);
});

export const AddDriverFormUI = reduxForm({ form: 'add-driver' })(React.memo(AddDriverForm))
