
import { app } from "../server";

const io = new Server();
export const httpServer = http.createServer(app);


export class SocketEvents {
    public static connectionStatus() {
        io.on("connectionStatus", (socket) => {
            console.log(socket);
        });
    }
}
