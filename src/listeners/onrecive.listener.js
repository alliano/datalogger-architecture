import { ParsingService } from "../configurations/injections.config.js";

export function onReceiveListener(data) {
  try{
    ParsingService.parsingData(data);
  }catch(err){
    console.error(err);
  }
}