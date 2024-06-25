export interface UserState {
    _id: string;
    name: string;
    email: string;
    profile_pic: string;
    token: string;
    onlineUser: string[];
    socketConnection: WebSocket | null;
}

export type itemsSidebarType = {
    id: number,
    title: string,
    icon: string
}[]