import { IconCircleDashedCheck, IconDots, IconPhoto, IconVideo } from "@tabler/icons-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import uploadFile from "../../../../functions/uploadFile";
import { massageSend } from "../../../../types/chatsType";
import { RootState } from "../../../../types/translationTypes";

export type InputFillesProps = {
  setMassage: Dispatch<SetStateAction<massageSend>>
  massage: massageSend,
  setOpen: Dispatch<SetStateAction<boolean>>
  setUploadPhoto: Dispatch<SetStateAction<boolean>>,
  setUploadVideo: Dispatch<SetStateAction<boolean>>,
  open: boolean,
  uploadPhoto: boolean,
  uploadVideo: boolean
};

export default function InputFilles({ massage, setMassage, open, setOpen, setUploadPhoto, setUploadVideo, uploadPhoto, uploadVideo }: InputFillesProps) {
  const { backGroundMassageFiend } = useSelector((state: RootState) => state.theme.colors)

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.item(0)) {
      const file = e.target.files[0]
      const uploadPhoto = await uploadFile(file)
      await setMassage({
        ...massage,
        imageUrl: uploadPhoto.url
      })
      setUploadPhoto(true)
    }
  }
  const handleUploadVideo = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.item(0)) {
      const file = e.target.files[0]
      const uploadVideo = await uploadFile(file)
      await setMassage({
        ...massage,
        videoUrl: uploadVideo.url
      })
      setUploadVideo(true)
    }
  }


  return (
    <form className="relative h-fit">
      <div onClick={() => setOpen(!open)}>
        <IconDots size={15} color="#797c8c" />
      </div>
      <div style={{ background: backGroundMassageFiend }} className={`absolute ${open ? "-top-[70px]" : "-top-3 -z-10 opacity-0"}  bg-white flex gap-2 p-2 border border-light border-solid rounded-md transition-all ease-in-out duration-500`}>
        <label htmlFor="imageUpload" title="photo" className="bg-primary bg-opacity-20 rounded-full p-2 inline-block text-primary">
          {
            uploadPhoto ? <IconCircleDashedCheck size={15} /> : <IconPhoto size={15} />
          }
        </label>
        <label htmlFor="videoUpload" title="video" className="bg-primary bg-opacity-20 rounded-full p-2 inline-block text-primary">
          {
            uploadVideo ? <IconCircleDashedCheck size={15} /> : <IconVideo size={15} />
          }
        </label>
      </div>
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        onChange={(e) => handleUploadImage(e)}
        className="hidden"
      />
      <input
        type="file"
        id="videoUpload"
        name="videoUpload"
        accept="video/*"
        onChange={(e) => handleUploadVideo(e)}
        className="hidden"
      />
    </form>
  );
}
