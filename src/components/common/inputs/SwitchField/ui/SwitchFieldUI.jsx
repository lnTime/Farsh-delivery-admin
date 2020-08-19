import React from 'react';
import styles from './SwitchField.module.scss';

export const SwitchFieldUI = ({checked, setActivated}) => {
    return (<label className={styles.Switch}>
    <input type="checkbox" 
    checked={checked} 
    onChange={(e) => setActivated(e.target.checked)}/>
    <span className={`${styles.Slider} ${styles.Round}`}></span>
  </label>);
}