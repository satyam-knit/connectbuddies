import { response } from "express";
import Conversation from "../model/Conversation.js";
export const newConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await Conversation.findOne({
            members: { $all: [receiverId, senderId] }
        });

        if (exist) {
            return response.status(200).json("Coversation already exists");
        }

        const newConversation = new Conversation({
            members: [receiverId, senderId]
        });

        await newConversation.save();
        return response.status(200).json("Conversation created successfully");

    }
    catch (error) {

        return response.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        })
        return response.status(200).json(conversation);

    }
    catch (error) {
        return response.status(500).json(error.message);
    }
}