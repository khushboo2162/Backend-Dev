const os = require("os");
const fs = require("fs");

function logSystemInfo() {
    const cpu = os.cpus()[0].model;
    const totalMem = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const freeMem = (os.freemem() / (1024 * 1024)).toFixed(2);
    const platform = os.platform();
    const timestamp = new Date().toLocaleString();

    const log = `
Time: ${timestamp}
Platform: ${platform}
CPU: ${cpu}
Total Memory: ${totalMem} MB
Free Memory: ${freeMem} MB
-------------------------
`;

    fs.appendFile("systemInfo.log", log, (err) => {
        if (err) {
            console.error("Error writing log:", err);
        }
    });
}

setInterval(logSystemInfo, 5000);
