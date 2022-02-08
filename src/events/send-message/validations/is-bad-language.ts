import type { Socket } from "socket.io";
import { badLanguage } from "../../../utils/bad-language/bad-language-array";

export const isBadLanguage = (message: string, socket: Socket, author: string): boolean => {
    const badLanguageNumber = 0;

    const messageErrorBadLanguage = `${author}, Don't send bad language.`;

    for (let i = 0; i < badLanguage.length; i++) {
        const checkBadLaguage = message.search(badLanguage[i]);

        if (checkBadLaguage == badLanguageNumber) {
            socket.broadcast.emit("sendError", messageErrorBadLanguage);
            socket.emit("blockChat", messageErrorBadLanguage);
            return false;
        }
    }
    return true;
};