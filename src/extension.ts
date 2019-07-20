// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "inserttime" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.inserttime', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Insert Time!');
		let activeTextEditor  = vscode.window.activeTextEditor;
		if (activeTextEditor != undefined) {
			let position = activeTextEditor.selection.active;
			activeTextEditor.edit(
				editBuilder =>{
					let date = new Date();
					let dateString = formatDate(date);
					editBuilder.insert(new vscode.Position(position.line,position.character),dateString);

				}

			);
			
		}
	});

	context.subscriptions.push(disposable);
}

function formatDate(date: Date): string {
	let year = date.getFullYear();
	let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
	let day = (date.getDate()) < 10 ? '0' + (date.getDate()) : (date.getDate());
	let hour = date.getHours();
	let minute = (date.getMinutes()) < 10 ? '0' + (date.getMinutes()) : (date.getMinutes());
	let second = (date.getSeconds()) < 10 ? '0' + (date.getSeconds()) : (date.getSeconds());
	let result = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
	return result;
}

// this method is called when your extension is deactivated
export function deactivate() {}
