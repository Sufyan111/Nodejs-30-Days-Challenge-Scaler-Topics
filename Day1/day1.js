const fs = require("fs");

function readFileContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");


    if (content === "") {
      console.log(`""`);
      return;
    }

    console.log(`File Content:\n${content}`);
  } catch (err) {
    console.log(`Error reading file: ${err.message}`);
  }
}
// Test Cases
readFileContent("test-files/file1.txt");
readFileContent("test-files/empty-file.txt");
readFileContent("test-files/nonexistent-file.txt");
