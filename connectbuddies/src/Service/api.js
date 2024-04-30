import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${URL}/add`, data);
        return response.data;
    }
    catch (error) {
        console.log("ERROR WHILE ADDING USER", error.message);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${URL}/users`);
        return response.data;
    }
    catch (error) {
        console.log("ERROR WHILE GETTING USERS", error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${URL}/conversation/add`, data);
    }
    catch (error) {
        console.log("ERROR WHILE ADDING CONVERSATION", error.message);
    }

}
export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${URL}/conversation/get`, data);
        return response.data;
    }
    catch (error) {
        console.log("ERROR WHILE GETTING CONVERSATION", error.message);
    }
}

export const newMessage = async (data) => {

    try {

        await axios.post(`${URL}/message/add`, data);
    }
    catch (error) {

        console.log("ERROR WHILE CALLING NEWMESSAGE API ", error.message)

    }

}

export const getMessages = async (id) => {

    try {
        let response = await axios.get(`${URL}/message/get/${id}`);
        return response.data;
    }
    catch (error) {

        console.log("ERROR WHILE cCALLING GETMESSAGE API", error.message);

    }

}



export const uploadFile = async (data) => {
    try {
        return await axios.post(`${URL}/file/upload`, data);
    }
    catch (error) {
        console.log("ERROR WHILE UPLOADING FILE", error.message);
    }
}
