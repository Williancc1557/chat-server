import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = new Server(server);

const chatData: Array<object> = [];


io.on("connection", (socket) => {

    socket.emit("previusMessage", chatData);

    socket.on("sendMessage", (data: object) => {
        chatData.push(data);
        socket.broadcast.emit("receivedMessage", data)
    })
});

server.listen(3000);