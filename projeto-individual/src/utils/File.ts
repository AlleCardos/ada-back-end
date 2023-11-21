import { writeFileSync, readFileSync } from 'fs'

export abstract class File{

    static fileWrite(data: any, path: string){
        writeFileSync(path, JSON.stringify(data, null, 2), 'utf-8')
    }

    static fileRead(path: string){
        return JSON.parse(readFileSync(path, 'utf-8'))
    }

}