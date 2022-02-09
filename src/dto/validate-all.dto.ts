import type { Socket } from "socket.io";

export interface ValidateDto {
    socket: Socket;
    author: string;
    message: string;
}