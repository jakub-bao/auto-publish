import {command} from "./command";

export function checkChanges(repoPath:string){
    return Buffer.byteLength(command(repoPath, 'git status --porcelain'))>0;
}

export function commit(repoPath:string){
    // execSync(`(cd ${repoPath} && git add .)`);
    // execSync(`(cd ${repoPath} && git commit -a -m "auto-commit")`);

    // command(repoPath, 'git add .');
    // command(repoPath, 'git commit -a -m "auto-commit"')
}