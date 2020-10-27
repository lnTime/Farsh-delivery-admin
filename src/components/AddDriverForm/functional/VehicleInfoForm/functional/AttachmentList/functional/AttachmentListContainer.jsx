import React, { useCallback } from "react";
import { AttachmentListUI } from "../ui/AttachmentListUI"

export const AttachmentListContainer = (props) => {
    const {setFileInfo, fileInfo} = props;
   
    const handleDelete = useCallback((id) => {
        setFileInfo((data) => {
            const idx = data.findIndex((item) => item.id === id);
            const upDateData = [
                ...data.slice(0, idx),
                ...data.slice(idx + 1)
            ]
            return (upDateData);
        })
    }, [setFileInfo]);

    if (fileInfo.length === 0) {
        return null;
    }
    

    return <AttachmentListUI handleDelete={handleDelete} {...props}/>;
}