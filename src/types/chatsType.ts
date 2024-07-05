type lastMsgType = {
    createdAt: string,
    imageUrl: string,
    msgByUserId: string,
    seen: boolean,
    text: string,
    updatedAt: string
    videoUrl: string
    __v: number
    _id: string
}

type receiverType = {
    createdAt: string,
    email: string
    name: string
    password: string
    profile_pic: string
    updatedAt: string
    __v: number
    _id: string
}

type senderType = {
    createdAt: string
    email: string
    name: string
    password: string
    profile_pic: string
    updatedAt: string
    __v: number
    _id: string
}

export type conversationType = {
    id: string,
    lastMsg: lastMsgType,
    receiver: receiverType,
    sender: senderType,
    unseenMsg: number
    _id: string
}[]

export type userChat = {
    email: string,
    name: string,
    online: boolean,
    profile_pic: string,
    _id: string
}

export type allMassage = {
    createdAt: string,
    imageUrl: string
    msgByUserId: string
    seen: boolean
    text: string
    videoUrl: string
    __v: string
    _id: string
}[]

export type massageSend = {
    text: string,
    imageUrl: string,
    videoUrl: string
}