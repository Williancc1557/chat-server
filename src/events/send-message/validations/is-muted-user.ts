import { userMuted } from "../../mute-user/mute-user";

export const isMutedUser = (ip: string): boolean => {
    const exists = userMuted.find(iplist => iplist === ip);
    if (exists) return true;
    return false;
};  