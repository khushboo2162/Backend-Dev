const fs = require("fs");
const readline = require("readline");

// Counters
let totalLogs = 0;
let errorCount = 0;
let warnCount = 0;
let infoCount = 0;

// Create read stream
const fileStream = fs.createReadStream("logs.txt");

// Read line by line using stream
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

rl.on("line", (line) => {
    totalLogs++;

    if (line.includes("ERROR")) {
        errorCount++;
    } else if (line.includes("WARN")) {
        warnCount++;
    } else if (line.includes("INFO")) {
        infoCount++;
    }
});

rl.on("close", () => {
    console.log("📊 Log File Summary Report");
    console.log("--------------------------");
    console.log("Total log entries:", totalLogs);
    console.log("Error count:", errorCount);
    console.log("Warning count:", warnCount);
    console.log("Info count:", infoCount);
});
