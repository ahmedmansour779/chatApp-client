import { UploadResponse } from "../types/form";

const url = `https://api.cloudinary.com/v1_1/ddwo8iuhl/auto/upload`;

const uploadFile = async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", "chat-app-file");

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData: UploadResponse = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export default uploadFile;