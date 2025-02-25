import { ParsingService } from "../configurations/injections.config.js";
import { Socket } from "node:dgram";
/**
 * 
 * @param {{}} data 
 * @param {Socket} socket 
 */
export function onReceiveListener(data, socket) {
  try{
    return ParsingService.parsingData(data, socket);
  }catch(err){
    console.error(err);
  }
}