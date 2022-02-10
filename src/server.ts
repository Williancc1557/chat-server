import type { Socket } from "socket.io";
import { Server } from "socket.io";
import { sendMessageEvent } from "./events/send-message/send-message.event";
import { previusMessageEvent } from "./events/previus-message/previus-message.event";
import { server } from "./app";

const io = new Server(server);

export const dataChat: Array<object> = [];

io.on("connection", (socket: Socket): void => {
    previusMessageEvent("previusMessage", socket);
    sendMessageEvent("sendMessage", socket);
});

const portaLocal = 3000;
const portaHost = process.env.PORT;
const PORTA = portaHost || portaLocal;

server.listen(PORTA);