// @ts-ignore
import { ts } from 'monaco-editor/esm/vs/language/typescript/ts.worker.js';

// @ts-ignore
export * from 'monaco-editor/esm/vs/language/typescript/ts.worker.js';

const tsLibsToRemove = [
    'dom',
    'dom.iterable',
    'scripthost',
    'webworker',
    'webworker.importscripts',
    'webworker.iterable',
    'decorators',
    'decorators.legacy',
];
tsLibsToRemove.forEach(lib => {
    const index = ts.typescript.libs.indexOf(lib);
    index !== -1 && ts.typescript.libs.splice(index, 1);
    ts.typescript.libMap.delete(lib);
});
