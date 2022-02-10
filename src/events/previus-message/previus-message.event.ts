import type { Socket } from "socket.io";
import { dataChat } from "../../server";

export const previusMessageEvent = (eventName: string, socket: Socket): void => {
    socket.emit(eventName, dataChat);
};