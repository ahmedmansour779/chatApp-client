export type FormDataObject = {
    [key: string]: string | boolean;
};

export type UploadResponse = {
    asset_id: string;
    public_id: string;
    version_id: string;
    signature: string;
    format: string;
    resource_type: string;
    created_at: string;
    type: string;
    etag: string;
    url: string;
    secure_url: string;
    access_mode: string;
    original_filename: string;
    [key: string]: string; // Additional properties
}