import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { FormDataObject } from "../types/form";

interface handelRegisterProps {
    e: React.FormEvent<HTMLFormElement>;
    available: boolean;
    value: string;
    msgErrorData: string;
    alreadyUserAccount: string;
    link: NavigateFunction;
}

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
        const URL = "http://localhost:8080/api/register"
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
