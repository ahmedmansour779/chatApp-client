import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types/userTypes';

const initialState: UserState = {
    _id: "",
    name: "",
    email: "",
    profile_pic: "",
    token: "",
    onlineUser: [],
    socketConnection: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ _id: string; name: string; email: string; profile_pic: string }>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.profile_pic = action.payload.profile_pic;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state._id = "";
            state.name = "";
            state.email = "";
            state.profile_pic = "";
            state.token = "";
            state.socketConnection = null;
        },
        setOnlineUser: (state, action: PayloadAction<string[]>) => {
            state.onlineUser = action.payload;
        },
        setSocketConnection: (state, action: PayloadAction<WebSocket | null>) => {
            state.socketConnection = action.payload;
        },
    },
});

export const { setUser, setToken, logout, setOnlineUser, setSocketConnection } = userSlice.actions;

export default userSlice.reducer;
