import { sleep } from "@techmmunity/utils";
import type { Socket } from "socket.io";

export const userMuted: Array<string> = [];

export const muteUser = async (ip: string, socket: Socket, author: string): Promise<void> => {
    userMuted.push(ip);

    const muteSeconds = 120;

    socket.emit("rateLimit", author);

    await sleep(muteSeconds);

    const userMutedIndex = userMuted.findIndex(iplist => iplist === userMuted[ip]);

    const quantityRemove = 1;

    userMuted.splice(userMutedIndex, quantityRemove);
};