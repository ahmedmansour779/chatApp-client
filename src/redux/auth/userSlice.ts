import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';
import { Socket } from 'socket.io-client';
import { UserState } from '../../types/userTypes';


const initialState: UserState = {
    _id: "",
    name: "",
    email: "",
    profile_pic: "",
    token: "",
    onlineUser: [],
    socketConnection: null,
    chatId: "",
    searchValue: ""
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
            state.chatId = ""
        },
        setOnlineUser: (state, action: PayloadAction<string[]>) => {
            state.onlineUser = action.payload;
        },
        setSocketConnection: (state, action: PayloadAction<null | WritableDraft<Socket>>) => {
            state.socketConnection = action.payload;
        },
        setChatId: (state, action: PayloadAction<string>) => {
            state.chatId = action.payload
        },
        setSearchValueRedux: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
    },
});

export const { setUser, setToken, logout, setOnlineUser, setChatId, setSearchValueRedux } = userSlice.actions;
export const setSocketConnection = createAction<Socket>('SET_SOCKET_CONNECTION');

export default userSlice.reducer;
