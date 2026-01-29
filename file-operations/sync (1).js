const fs = require("fs");
const path = require("path");

function syncDirectories(sourceDir, destDir) {
    try {
        // Create destination directory if not exists
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        const sourceFiles = fs.readdirSync(sourceDir);

        sourceFiles.forEach((file) => {
            const sourcePath = path.join(sourceDir, file);
            const destPath = path.join(destDir, file);

            const sourceStat = fs.statSync(sourcePath);

            // If file is a directory → recursive sync
            if (sourceStat.isDirectory()) {
                syncDirectories(sourcePath, destPath);
            } 
            // If file
            else {
                if (!fs.existsSync(destPath)) {
                    fs.copyFileSync(sourcePath, destPath);
                    console.log(`Copied: ${file}`);
                } else {
                    const sourceContent = fs.readFileSync(sourcePath);
                    const destContent = fs.readFileSync(destPath);

                    if (!sourceContent.equals(destContent)) {
                        fs.copyFileSync(sourcePath, destPath);
                        console.log(`Updated: ${file}`);
                    }
                }
            }
        });

    } catch (error) {
        console.log("Error during synchronization:", error.message);
    }
}

// Command-line arguments
const source = process.argv[2];
const destination = process.argv[3];

if (!source || !destination) {
    console.log("Usage: node sync.js <sourceDir> <destinationDir>");
} else {
    syncDirectories(source, destination);
    console.log("Synchronization completed");
}
