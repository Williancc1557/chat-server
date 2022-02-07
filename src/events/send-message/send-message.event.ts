import type { Socket } from "socket.io";
import type { MessageDto } from "../../dto/message.dto";
import type { XssValidationDto } from "../../dto/xss-validation.dto";
import { dataChat } from "../../server";
import { sendMessageValidation } from "./validations/send-message-validations";
import { xssValidation } from "./validations/xss-validation";

export const sendMessage = (socket: Socket, eventName: string) => {
    socket.on(eventName, (data: MessageDto) => {
        const { authorXSS, messageXSS }: XssValidationDto = xssValidation(data);

        if (!sendMessageValidation(authorXSS, messageXSS)) return false;


        const dataAntXSS = {
            message: messageXSS,
            author: authorXSS,
        };

        socket.broadcast.emit("receivedMessage", dataAntXSS);
        dataChat.push(dataAntXSS);
    });
};