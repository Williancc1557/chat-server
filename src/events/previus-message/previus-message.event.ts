import type { Socket } from "socket.io";

export const previusMessage = (eventName: string, socket: Socket, dataChat: Array<object>) => {
    socket.emit(eventName, dataChat);
};