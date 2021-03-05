import {load} from "js-yaml";
import {readFileSync} from "fs";

export function getRepoPaths():string[] {
    const yamlConfig = load(readFileSync('config/repos.yaml', 'utf8')).repositories;
    const folders = Object.keys(yamlConfig);
    let repoPaths;
    folders.forEach((folder) => {
        const repoNames = yamlConfig[folder].split(' ');
        repoPaths = repoNames.map(name => folder + '/' + name)
    });
    return repoPaths;
}