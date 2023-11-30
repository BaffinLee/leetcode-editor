import * as monaco from 'monaco-editor';

let workerPath = './worker/';

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return `${workerPath}json.worker.js`;
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return `${workerPath}css.worker.js`;
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return `${workerPath}html.worker.js`;
		}
		if (label === 'typescript' || label === 'javascript') {
			return `${workerPath}ts.worker.js`;
		}
		return `${workerPath}editor.worker.js`;
	}
};

// @ts-ignore
self.createMonacoEditor = function(
	container: HTMLElement,
	options?: monaco.editor.IStandaloneEditorConstructionOptions,
	override?: monaco.editor.IEditorOverrideServices,
	workerFilePath?: string,
) {
	if (workerFilePath !== undefined) {
		workerPath = workerFilePath === '' || workerFilePath === '.'
			? './'
			: (workerFilePath.endsWith('/') ? workerFilePath : `${workerFilePath}/`);
	}
	return monaco.editor.create(
		container,
		{
			language: 'javascript',
			fontSize: 13,
			tabSize: 4,
			scrollBeyondLastLine: false,
			wordWrap: "on",
			autoClosingBrackets: "always",
			autoClosingQuotes: "always",
			minimap: {
				enabled: false
			},
			automaticLayout: true,
			glyphMargin: true,
			lineNumbersMinChars: 2,
			lineDecorationsWidth: 1,
			padding: {
				top: 8,
				bottom: 80
			},
			fixedOverflowWidgets: true,
			selectionHighlight: true,
			parameterHints: {
				enabled: true
			},
			lightbulb: {
				enabled: true
			},
			hover: {
				enabled: true
			},
			quickSuggestions: true,
			suggestOnTriggerCharacters: true,
			...options,
		},
		override,
	);
}
