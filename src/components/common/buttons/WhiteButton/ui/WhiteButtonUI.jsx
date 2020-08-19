import React from 'react';
import styles from '../ui/whiteButton.module.scss';
import '../ui/whiteButton.module.scss';

export const WhiteButtonUI = ({ text }) => {
    return <button className={styles.WhiteButtton}> {text}</button>
}
