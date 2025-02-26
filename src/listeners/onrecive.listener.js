import {ParsingService } from "../configurations/injections.config.js";
import { Socket } from "node:dgram";
/**
 * 
 * @param {{}} data 
 * @param {Socket} socket 
 */
export function onReceiveListener(data) {
  try{
    // socket.write("HELLO")
    /**
     * call the logic to process the data that sent from analyzer
     */
    ParsingService.parsingData(data);
  }catch(err){
    console.error(err);
  }
}