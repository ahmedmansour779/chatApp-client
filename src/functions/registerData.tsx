import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../api";
import { FormDataObject } from "../types/form";
import { handelRegisterProps } from "../types/requestTypes";

export const handelRegister = async ({ available, e, value, msgErrorData, alreadyUserAccount, link }: handelRegisterProps) => {
    e.preventDefault();
    if (!available) {
        toast.error(msgErrorData);
        return;
    }
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: FormDataObject = {};
    formData.forEach((value, key) => {
        data[key] = value as string | boolean;
    });
    data.profile_pic = value;
    delete data.termsCondition;
    const allDataComplete = Object.values(data).every(val => val !== "");
    if (allDataComplete) {
        const URL = `${api}/api/register`
        try {
            const response = await axios.post(URL, data)
            console.log("response", response)
            link('/')
        } catch (error) {
            toast.error(alreadyUserAccount);
            console.log(error);
        }
    } else {
        toast.error(msgErrorData);
    }
};
