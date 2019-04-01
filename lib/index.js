import fs, { exists } from 'fs'
import path from 'path'

/**
 * Saves a file as a json, please provide full filepath if not it will be relative
 */
const saveJSON = (name, data, dir=`data`) => {
    fs.writeFileSync(`${path.resolve(dir)}/${name}.json`, JSON.stringify(data), 'utf-8');
    console.log(`${name}.json saved!`);
}


const readJSON = (filename) => {
    let raw =  fs.readFileSync(path.resolve(filename));
    return JSON.parse(raw);
}

export {saveJSON, readJSON}