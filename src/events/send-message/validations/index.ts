import type { ValidateAllDto } from "../../../dto/validate-all.dto";
import { rateLimiter } from "../../../middlewares/rate-limit";
import { muteUser } from "../../mute-user/mute-user";
import { isMutedUser } from "./is-muted-user";
import { sendMessageValidation } from "./send-message-validations";

export const validateAll = async ({ socket, author, message }: ValidateAllDto): Promise<boolean> => {
    try {
        await rateLimiter.consume(socket.handshake.address);
    } catch {
        muteUser(socket.handshake.address);
        return false;
    }

    if (isMutedUser(socket.handshake.address)) return false;
    if (!sendMessageValidation(author, message)) return false;

    return true;
};