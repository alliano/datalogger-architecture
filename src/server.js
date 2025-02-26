import { Socket } from "node:dgram";
import net from "node:net";
import { onReceiveListener } from "./listeners/onrecive.listener.js";
import { onConnectedListener } from "./listeners/onConnect.listenere.js";
import { onErrorListener } from "./listeners/onError.listener.js";
import { ApplicationContext } from "./configurations/injections.config.js";
import { APPLICATION_SOCKET } from "./context/context.js";

/**
 * 
 * @param {Socket} socket 
 */
const initSever = (socket) => {
  try {
    /**
     * set current context for the current thread
     */
    ApplicationContext.setContext(APPLICATION_SOCKET, socket);
    socket.on("data", onReceiveListener);
    socket.on("connect", onConnectedListener);
    socket.on("error", onErrorListener);
    socket.on("close", onConnectedListener)
  } catch (err) {
    console.error(err);
  }
};
const server = net.createServer(initSever);
server.listen(3000, "127.0.0.1", () => console.log("Server started on port 3000"));
