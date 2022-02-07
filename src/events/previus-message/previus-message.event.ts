import type { Socket } from "socket.io";

export const previusMessage = (eventName: string, socket: Socket, dataChat: Array<object>): void => {
    socket.emit(eventName, dataChat);
};