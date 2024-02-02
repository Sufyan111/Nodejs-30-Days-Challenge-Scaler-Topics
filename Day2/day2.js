const { writeFileSync, readFileSync } = require('fs');

const writeToFile = (filePath, content) => {
    try {
        writeFileSync(filePath, content);
        let data = readFileSync(filePath);
        console.log("data ==> " + data);
        return;
    } catch(err) {
        console.log(`Error writing to file: ${err}`)
    }
}

// Test Cases:
writeToFile('test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...