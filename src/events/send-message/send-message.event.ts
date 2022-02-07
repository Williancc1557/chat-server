import type { Socket } from "socket.io";
import type { MessageDto } from "../../dto/message.dto";
import type { XssValidationDto } from "../../dto/xss-validation.dto";
import { dataChat } from "../../server";
import { validateAll } from "./validations";
import { xssValidation } from "./validations/xss-validation";

export const sendMessage = (socket: Socket, eventName: string) => {
    socket.on(eventName, async (data: MessageDto) => {
        const { authorXSS, messageXSS }: XssValidationDto = xssValidation(data);
        const validateMessagAndAuthor = await validateAll({ authorXSS, messageXSS, socket });
        if (!validateMessagAndAuthor) return false;

        const dataAntXSS = {
            message: messageXSS,
            author: authorXSS,
        };

        socket.broadcast.emit("receivedMessage", dataAntXSS);
        dataChat.push(dataAntXSS);
    });
};