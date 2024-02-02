const fs = require("fs");

function readFileContent(filePath) {
  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      console.log(`Error reading file: ${err.message}`);
      return;
    }

    if (content === "") {
      console.log(`""`);
      return;
    }

    console.log(`File Content:\n${content}`);
  });
}

// Test Cases
// readFileContent("test-files/file1.txt");
// readFileContent("test-files/empty-file.txt");
readFileContent("test-files/nonexistent-file.txt");
