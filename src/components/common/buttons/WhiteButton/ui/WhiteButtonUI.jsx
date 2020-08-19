import React from 'react';
import styles from '../ui/whiteButton.module.scss';
import '../ui/whiteButton.module.scss';

export const WhiteButtonUI = ({ signIn }) => {
    return <button className={styles.WhiteButtton}> {signIn}</button>
}