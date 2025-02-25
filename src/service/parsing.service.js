import { Socket } from "node:dgram";

export class ParsingService {
  constructor() {
    if (ParsingService.instance) return ParsingService.instance;
    else ParsingService.instance = this;
  }



  /**
   * 
   * @param {} data 
   * @param {Socket} socket 
   */
  parsingData(data, socket){
    console.log("RECEIVE: ", data.toString());
    socket.write("\x05");
    // if(data == 0x06){
    //   console.log(Buffer.from(data))
    // }
    return socket;
  }

  


}
