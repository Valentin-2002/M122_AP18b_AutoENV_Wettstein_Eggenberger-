const vscode = require('vscode');

// This Function gets called when VS Code gets closed
function deactivate() {

	// Specify the Path of the Current Working Directory (CWD)
	const CURRENT_WORKING_DIR  = vscode.workspace.workspaceFolders[0].uri.fsPath;

	// Import Functionality to execute shell Commands
	const { exec } = require('child_process');

	// Import File System Library
	const fileSystem = require('fs');	

	// Checks if a working folder has been opened in VS Code
	if(vscode.workspace.workspaceFolders !== undefined) {

		// Checks if a .gitignore file exists
		if(fileSystem.existsSync(CURRENT_WORKING_DIR + '/.gitignore')){

			// Checks the status of the GIT Repo
			exec('git status', {cwd: CURRENT_WORKING_DIR}, function(err, stdout, stderr) {

				// Pushes to GIT Repo if repo is not up to Date
				if(!stdout.includes('up to date')) exec('git push', {cwd: CURRENT_WORKING_DIR});

			});		

		} 

	} 	

}

module.exports = {
	deactivate
}