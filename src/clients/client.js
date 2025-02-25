import net from "node:net";

const client = new net.Socket();
client.connect(3000, "127.0.0.1", connect);
const ack = "\x06";
const nak = "\x15";
const enq = "\x05";
const eot = "\x04";

function connect() {
    client.on("connect", () => client.write(ack));
    client.on("data", (data) => console.log(Buffer.from(data)));
    client.on("error", (err) => console.error(err));

    // const request = `||||||000102103103|||Mndray||201jf1223||`;
    // client.write(request);
}

connect();
