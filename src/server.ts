import type { Socket } from "socket.io";
import { Server } from "socket.io";
import { sendMessage } from "./events/send-message/send-message.event";
import { previusMessage } from "./events/previus-message/previus-message.event";
import { server } from "./app";

const io = new Server(server);

export const dataChat: Array<object> = [];

io.on("connection", (socket: Socket) => {
    previusMessage("previusMessage", socket, dataChat);
    sendMessage(socket, "sendMessage");
});

const portaLocal = 3000;
const portaHost = process.env.PORT;
const PORTA = portaHost || portaLocal;

server.listen(PORTA);