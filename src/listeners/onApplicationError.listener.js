import { ApplicationContext } from "../configurations/injections.config.js";
import { APPLICATION_SOCKET } from "../context/context.js";

/**
 * 
 * @param {Error} error 
 */
export function onApplicationErrorListener(error){
    const socket = ApplicationContext.getContext(APPLICATION_SOCKET);
    console.log(socket.write("ERROR OCURED ON SERVER"))
    console.log(error.message);
}