export interface handelRegisterProps {
    e: React.FormEvent<HTMLFormElement>;
    msgErrorData: string
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