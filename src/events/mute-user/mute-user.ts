import { sleep } from "@techmmunity/utils";

export const userMuted = [];

export const muteUser = async (ip: string) => {
    userMuted.push(ip);

    const muteSeconds = 60;

    await sleep(muteSeconds);

    const userMutedIndex = userMuted.findIndex(iplist => iplist === userMuted[ip]);

    const quantityRemove = 1;

    userMuted.splice(userMutedIndex, quantityRemove);
};