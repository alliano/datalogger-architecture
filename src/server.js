import { Socket } from "node:dgram";
import net from "node:net";
import { onReceiveListener } from "./listeners/onrecive.listener.js";

/**
 * 
 * @param {Socket} socket 
 */
const initSever = (socket) => {
  try {
    socket.on("connect", () => console.log("Client connected"));
    socket.on("data", (data) => onReceiveListener(data));
    socket.on("error", (err) => console.error(err));
    socket.write("Hello from server");
  } catch (err) {
    console.error(err);
  }
};
const server = net.createServer(initSever);
server.listen(3000, "127.0.0.1", () => console.log("Server started"));
