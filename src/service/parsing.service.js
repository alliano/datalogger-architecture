import { Socket } from "node:dgram";
import { ACK, APPLICATION_SOCKET, EOT, NAK } from "../context/context.js";
import { ApplicationContext } from "../configurations/injections.config.js";

export class ParsingService {
  constructor() {
    if (ParsingService.instance) {
      return ParsingService.instance;
    }
    else {
      ParsingService.instance = this;
    }
  }



  /**
   * 
   * @param {} data 
   * @param {Socket} socket 
   */
  parsingData(data){
    throw new Error("ERRORRRR")
    const socket = ApplicationContext.getContext(APPLICATION_SOCKET);
    console.log("RECEIVE: ", data.toString());
    if(data == ACK) socket.write(NAK);
    if(data == EOT) {
      console.log("SERVER RECEIVE EOT, THE COMMUNICATION WILL BE END...")
      const timeOut = setTimeout(() => {
        socket.write("COMMUNICATION END")
        clearTimeout(timeOut);
      }, 3000);
    }
  }

}
