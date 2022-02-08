import type { ValidateAllDto } from "../../../dto/validate-all.dto";
import { rateLimiter } from "../../../middlewares/rate-limit";
import { muteUser } from "../../../utils/mute-user/mute-user";
import { isBadLanguage } from "./is-bad-language";
import { isMutedUser } from "./is-muted-user";
import { sendMessageValidation } from "./message-and-author-validations";

export const validateAll = async ({ socket, author, message }: ValidateAllDto): Promise<boolean> => {

    if (!isBadLanguage(message, socket, author)) {
        return false;
    }

    if (isMutedUser(socket.handshake.address)) return false;

    try {
        await rateLimiter.consume(socket.handshake.address);
    } catch {
        muteUser(socket.handshake.address, socket, author);
        return false;
    }

    if (!sendMessageValidation(author, message)) return false;

    return true;
};