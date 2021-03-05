import {checkChanges, commit} from "./git";

export function autoPublish(repoPath:string){
    console.log('\n\nProcessing', repoPath);
    if (!checkChanges(repoPath)) return console.log(`No changes in ${repoPath}`)
    console.log('change check failing')
    // commit(repoPath);
}