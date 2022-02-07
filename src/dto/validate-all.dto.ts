import type { Socket } from "socket.io";

export interface ValidateAllDto {
    socket: Socket;
    authorXSS: string;
    messageXSS: string;
}