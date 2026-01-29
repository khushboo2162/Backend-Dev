const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

// READ FILE
if (command === "read") {
    fs.readFile(arg1, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }
        console.log(data);
    });
}

// WRITE FILE
else if (command === "write") {
    fs.writeFile(arg1, arg2, (err) => {
        if (err) {
            console.log("Error writing file");
            return;
        }
        console.log("File written successfully");
    });
}

// COPY FILE
else if (command === "copy") {
    fs.copyFile(arg1, arg2, (err) => {
        if (err) {
            console.log("Error copying file");
            return;
        }
        console.log("File copied successfully");
    });
}

else if (command === "delete") {
    fs.unlink(arg1, (err) => {
        if (err) {
            console.log("Error deleting file");
            return;
        }
        console.log("File deleted successfully");
    });
}

else if (command === "list") {
    fs.readdir(arg1 || ".", (err, files) => {
        if (err) {
            console.log("Error reading directory");
            return;
        }
        files.forEach(file => console.log(file));
    });
}

else {
    console.log("Invalid command");
}
