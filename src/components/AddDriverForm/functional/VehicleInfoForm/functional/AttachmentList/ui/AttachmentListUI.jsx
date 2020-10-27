import React from 'react';

import styles from './AttachmentList.module.scss';
import { TypeIconContainer } from '../../../../../../common/icons/TypeIcon/functional/TypeIconContainer';

export const AttachmentListUI = ({fileInfo, handleDelete, className = ''}) => {
    return <div className={`${styles.Files} ${className}`}>
        {fileInfo.map((data) => {
            return (
                <div className={styles.UploadFile} key={data.id}>
                    <div className={styles["UploadFile-Title"]}>
                        <h3 className={styles["UploadFile-H3"]}>{data.id}. {data.inpValue}</h3>
                        <div onClick={() => handleDelete(data.id)} className={styles.Flex}>
                            <span>&#10006;</span>
                            <span className={styles["UploadFile-Remove"]}>Remove</span>
                        </div>
                    </div>
                    <div className={styles.FileData}>
                        <TypeIconContainer className={styles['FileData-Icon']} type={data.type} />
                        <p className={styles["UploadFile-P"]}>{data.name}</p>
                        <span className={styles["UploadFile-Span"]}>{data.size + 'KB'}</span>
                    </div>
                </div>
            )
        })
        }
    </div>
}