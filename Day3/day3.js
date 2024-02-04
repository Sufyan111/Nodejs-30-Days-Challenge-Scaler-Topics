const cp = require('child_process')

function executeCommand(command) {
    cp.exec(command, (error, stdout, stderr) => {
        if(error) {
            // issues like command not found, permission issues, 
            // or other errors that prevent the child process from executing
            console.log(`Error: ${error}`);
            return;
        }
        
        if(stderr) {
            // It represents the standard error occured after executing the command.
            console.log(`Error output: ${stderr}`);
            return;
        }

        console.log(`Command Output: ${stdout}`);
    })
}

executeCommand("dir /a /l");
// Expected Output: (output of ls -la)

executeCommand('echo Hello, Node.js!');
// Expected Output: Hello, Node.js!