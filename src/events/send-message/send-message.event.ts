import type { Socket } from "socket.io";
import type { MessageDto } from "../../dto/message.dto";
import { dataChat } from "../../server";
import { sendMessageValidation } from "./validations/send-message-validations";

export const sendMessage = (socket: Socket, eventName: string) => {
    socket.on(eventName, (data: MessageDto) => {
        const { author, message } = data;
        if (sendMessageValidation(author, message)) {
            socket.broadcast.emit("receivedMessage", data);
            dataChat.push(data);
        }
    });
};