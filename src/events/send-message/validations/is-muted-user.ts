import { userMuted } from "../../mute-user/mute-user";

export const isMutedUser = (ip: string) => {
    const exists = userMuted.find(iplist => iplist === ip);
    if (exists) return true;
    return false;
};  