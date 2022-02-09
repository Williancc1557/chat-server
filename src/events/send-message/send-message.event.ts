import type { Socket } from "socket.io";
import type { MessageDto } from "../../dto/message.dto";
import { dataChat } from "../../server";
import { maxMessageServer } from "../../utils/max-message-server/max-message-server";
import { validateAll } from "./validations";

export const sendMessageEvent = (eventName: string, socket: Socket): void => {
    socket.on(eventName, async (data: MessageDto) => {
        const { author, message }: MessageDto = data;
        const validateMessageAndAuthor = await validateAll({ author, message, socket });

        const maxMessageQuantity = 100;
        maxMessageServer(maxMessageQuantity);

        if (!validateMessageAndAuthor) return false;

        socket.broadcast.emit("receivedMessage", data);
        dataChat.push(data);
    });
};