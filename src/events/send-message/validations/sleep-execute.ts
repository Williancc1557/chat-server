import { sleepUsersData } from "../../../server";

export const sleepExecute = (id: string) => {
    const userSleep = sleepUsersData.find(data => data.author === id);
    const maxMessage = 10;

    if (userSleep.messageNumber < maxMessage) return true;
};