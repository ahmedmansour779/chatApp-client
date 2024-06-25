import { NavigateFunction } from "react-router-dom";

export interface handelLoginProps {
    e: React.FormEvent<HTMLFormElement>;
    msgErrorData: string;
    EmailNotCorrect: string
    PasswordNotCorrect: string
    link: NavigateFunction;
}

export interface responseEmailInterface {
    message: string;
    data: {
        _id: string;
    }
}
export interface responsePasswordInterface {
    message: string;
    token: string
}

export interface handelRegisterProps {
    e: React.FormEvent<HTMLFormElement>;
    available: boolean;
    value: string;
    msgErrorData: string;
    alreadyUserAccount: string;
    link: NavigateFunction;
}
