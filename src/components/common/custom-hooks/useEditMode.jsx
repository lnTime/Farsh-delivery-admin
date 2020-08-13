import { useState } from "react"

export const useEditMode = () => {
    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditModeChange = () => {
        setIsEditMode(!isEditMode);
    }

    return [isEditMode, handleEditModeChange];
}