import type { Socket } from "socket.io";

export interface ValidateAllDto {
    socket: Socket;
    author: string;
    message: string;
}