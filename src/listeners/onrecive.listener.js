import { applicationEvent } from "../configurations/applicationEvent.config.js";
import {ParsingService } from "../configurations/injections.config.js";
import { Socket } from "node:dgram";
/**
 * 
 * @param {{}} data 
 * @param {Socket} socket 
 */
export function onReceiveListener(data) {
  try{
    /**
     * call the logic to process the data that sent from analyzer
     */
    ParsingService.parsingData(data);
  }catch(err){
    applicationEvent.emit("error", err);
  }
}