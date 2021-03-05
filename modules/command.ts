import {execSync} from "child_process";

export function command(repoPath:string, cmd:string){
    let output = execSync(`(cd ${repoPath} && ${cmd})`);
    if (Buffer.byteLength(output)>0) console.log(output.toString());
    return output;
}