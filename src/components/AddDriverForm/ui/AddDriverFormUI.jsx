import React from 'react';
import { NewDriverSectionsContainer } from '../functional/NewDriverSections/functional/NewDriverSectionsContainer';
import {reduxForm} from 'redux-form'
import styles from './AddDriverForm.module.scss';
import { HeaderTopContainer } from '../../HeaderTop/functional/HeaderTopContainer';
import './AddDriverForm.module.scss';

export const AddDriverForm = React.memo(({ handleSubmit, onSubmit, Component, activeID, invalid, pristine, submitting, ...all }) => {
  return (
        <div className={styles.AddDriver}>
            <HeaderTopContainer />
            <div className={styles.AddDriverFormWrapper}>
              <NewDriverSectionsContainer activeID={activeID}/>
              <form className={styles.AddDriverForm} onSubmit={handleSubmit}>
                <Component {...all}/>
                <div className={styles.Submission}>
                  <button 
                    type="button"
                    onClick={() => all.setCurrentStep(currentStep => currentStep > 1 ? currentStep - 1 : currentStep)}
                    className={`${styles['Submission-button']} ${styles['Submission-button_white']}`}>Cancel</button>
                  <button
                    className={`${styles['Submission-button']} ${styles['Submission-button_black']}`}
                    disabled={invalid || submitting || pristine}
                    type="submit">{activeID === 6 ? 'Finish' : 'Next'}</button>
                </div>
              </form>
            </div>
        </div>);
});

export const AddDriverFormUI = reduxForm({ form: 'add-driver' })(React.memo(AddDriverForm))
