// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Activated!');

}

// this method is called when your extension is deactivated
function deactivate() {
	
	const DIR  = vscode.workspace.workspaceFolders[0].uri.fsPath;

	const { exec } = require('child_process');
	const fs = require('fs');

	if(vscode.workspace.workspaceFolders !== undefined) {

		
		if(fs.existsSync(DIR + '/.gitignore')){

			console.log('.gitignore exists');

			exec('git status', {cwd: DIR}, function(err, stdout, stderr) {

				console.log('stdout: ' + stdout);

			});
			
		}

	} 
	

	console.log('Works!');
}

module.exports = {
	activate,
	deactivate
}
