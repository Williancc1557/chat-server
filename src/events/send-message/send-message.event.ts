import type { Socket } from "socket.io";
import type { MessageDto } from "../../dto/message.dto";
import { dataChat } from "../../server";
import { validateAll } from "./validations";

export const sendMessage = (socket: Socket, eventName: string) => {
    socket.on(eventName, async (data: MessageDto) => {
        const { author, message } = data;
        const validateMessagAndAuthor = await validateAll({ author, message, socket });
        if (!validateMessagAndAuthor) return false;

        socket.broadcast.emit("receivedMessage", data);
        dataChat.push(data);
    });
};