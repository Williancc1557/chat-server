import type { Socket } from "socket.io";

export const previusMessageEvent = (eventName: string, socket: Socket, dataChat: Array<object>): void => {
    socket.emit(eventName, dataChat);
};