import { IconUpload } from "@tabler/icons-react";
import React, { SetStateAction, useRef, useState } from "react";
import { useSelector } from "react-redux";
import uploadFile from "../../../functions/uploadFile";
import { RootState } from "../../../types/translationTypes";

interface uploadImageProp {
  setValue: React.Dispatch<SetStateAction<string>>
}

export default function UpLoadImage({ setValue }: uploadImageProp) {
  const {
    personalPicture,
    uploadYourPhoto
  } = useSelector((state: RootState) => state.translation.words)
  const [image, setImage] = useState<string | null>("")
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handelOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileImage = e.target.files?.[0];
    if (!fileImage) return;

    // Perform the upload and set the value
    const result = await uploadFile(fileImage);
    setValue(result.url);

    // Create a URL for the image and set it
    const imageUrl = URL.createObjectURL(fileImage);
    setImage(imageUrl);

    // Read the file as a Data URL and set the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(fileImage);
  };


  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="profile_pic" className="font-semibold text-secondary text-sm" >
        {personalPicture}
      </label>
      <div className="w-0 h-0 overflow-hidden">
        <input
          type="file"
          accept="image/*"
          id="profile_pic"
          name="profile_pic"
          ref={inputRef}
          onChange={(e) => handelOnChange(e)} />
      </div>
      <div
        className="border border-solid border-primary rounded-lg w-full h-40 flex justify-center items-center flex-col gap-1 overflow-hidden hover:cursor-pointer"
        onClick={() => inputRef.current?.click()} >
        {
          image ?
            <img src={image} className="h-full" /> :
            <div className="flex flex-col justify-center items-center gap-4 text-lightBlack">
              <IconUpload size={25} />
              <p className="text-sm">
                {uploadYourPhoto}
              </p>
            </div>
        }
      </div>
    </div>
  );
}
