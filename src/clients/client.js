import net from "node:net";

const client = new net.Socket();
client.connect(3000, "127.0.0.1", connect);

function connect() {
    client.on("connect", () => console.log("Connected to server"));
    client.on("error", (err) => console.error(err));
    const request = `||||||000102103103|||Mndray||201jf1223||`;
    client.write(request);
}

connect();
