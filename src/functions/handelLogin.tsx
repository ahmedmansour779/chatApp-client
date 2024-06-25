import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { api } from "../api";
import { setToken } from "../redux/auth/userSlice";
import { FormDataObject } from "../types/form";
import { handelLoginProps, responseEmailInterface, responsePasswordInterface } from "../types/requestTypes";

export const handelLogin = async ({ e, msgErrorData, EmailNotCorrect, PasswordNotCorrect, link, dispatch }: handelLoginProps) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: FormDataObject = {};
    formData.forEach((value, key) => {
        data[key] = value as string | boolean;
    });
    const allDataComplete = Object.values(data).every(val => val !== "");
    if (!allDataComplete) {
        toast.error(msgErrorData);
        return;
    }
    const UrlEmail = `${api}/email`
    const UrlPassword = `${api}/password`
    try {
        const responseEmail: AxiosResponse<responseEmailInterface> = await axios.post<responseEmailInterface>(UrlEmail, {
            email: data.email
        })
        try {
            const responsePassword: AxiosResponse<responsePasswordInterface> = await axios.post<responsePasswordInterface>(UrlPassword, {
                userId: responseEmail.data.data._id,
                password: data.password
            })
            toast.success(responsePassword.data.message)
            dispatch(setToken(responsePassword.data.token))
            localStorage.setItem('token', responsePassword.data.token)
            link("/chat")
        } catch {
            console.log(PasswordNotCorrect);
        }
    } catch {
        toast.error(EmailNotCorrect)
    }
}

