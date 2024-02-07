const path = require("path");

function checkFileExtension(filePath, expectedExtension) {
  const actualExtension = path.extname(filePath);

  if (actualExtension === expectedExtension) {
    console.log(
      `Expected Output: File has the expected extension: ${actualExtension}`
    );
    return;
  } else {
    console.log(
      `Expected Output: File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`
    );
    return;
  }
}


// Test Cases
checkFileExtension("test-files/file1.txt", ".txt");
// Expected Output: File has the expected extension: .txt

checkFileExtension("test-files/image.png", ".jpg");
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png
