import { EventEmitter } from "node:events";
export class ApplicationEvent extends EventEmitter {
    
    /**
     * @param {boolean} captureRejections
     */
    constructor(captureRejections){
        super({captureRejections: captureRejections});
    }

}

const applicationEvent = new ApplicationEvent(true);
export { applicationEvent }