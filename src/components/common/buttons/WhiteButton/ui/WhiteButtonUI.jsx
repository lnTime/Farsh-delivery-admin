import React from 'react';
import styles from '../ui/whiteButtonModule.scss';

export const WhiteButtonUI = ({ signIn }) => {
    return <button className={styles.WhiteButtton}> {signIn}</button>
}