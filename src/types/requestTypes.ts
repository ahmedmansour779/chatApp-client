import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

export interface handelLoginProps {
    e: React.FormEvent<HTMLFormElement>;
    msgErrorData: string;
    EmailNotCorrect: string
    PasswordNotCorrect: string
    link: NavigateFunction;
    dispatch: Dispatch<UnknownAction>
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

export type dataSearchUsers = {
    email: string;
    createdAt: string;
    name: string;
    profile_pic: string;
    updatedAt: string;
    _id: string;
    _v: string
}[]

export interface responseSearchInterface {
    message: string;
    data: dataSearchUsers;
    success: string;
}



export interface handelRegisterProps {
    e: React.FormEvent<HTMLFormElement>;
    available: boolean;
    value: string;
    msgErrorData: string;
    alreadyUserAccount: string;
    link: NavigateFunction;
}
