import net from "node:net";
import { ACK, EOT, NAK } from "../../src/context/context.js";

const client = new net.Socket();
client.connect(3000, "127.0.0.1");
function connect() {
    client.on("connect", () => client.write(ACK));
    client.on("data", (data) => {
        if(data == NAK) client.write(EOT);
        else if(data == "COMMUNICATION END") console.log(data.toString());
        else console.log(data.toString())
    });
    client.on("error", (err) => console.error(err));
}

connect();