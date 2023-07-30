import * as path from "path";
import * as fs from 'fs';
import * as os from 'os';

const ASSETS_FOLDER_NAME="stable-diffusion-api-images"
const createFolderIfNotExist = (fodlerPath: string)=>{
    if(!fs.existsSync(fodlerPath)){
        fs.mkdirSync(fodlerPath)
    }
}
export const getDataFolderPath = ()=>{
    const result = path.resolve(os.tmpdir(),)
    createFolderIfNotExist(result)

    return result
}

export const persistData = (data:any, localFilePath:string)=>{
    fs.writeFileSync(localFilePath,data)
}