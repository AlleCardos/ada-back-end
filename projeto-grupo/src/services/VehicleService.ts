import { writeFileSync, readFileSync, existsSync } from 'fs'
import { Vehicle } from './../class/Vehicle';
import { VehicleProps } from '../props/VehicleProps';

export abstract class VehicleService {
    
    static create(data: VehicleProps){
        const veiculo = new Vehicle(data)
        
        if(existsSync('./assets/veiculos.json')){
            const content = JSON.parse(readFileSync('./assets/veiculos.json', 'utf-8'))
            const newContent = {
                ...content,
                veiculos: [
                    ...(content || []),
                    veiculo
                ]
            }

            writeFileSync('./assets/veiculos.json', JSON.stringify(newContent, null, 2), 'utf-8')
        }else{
            writeFileSync('./assets/veiculos.json', JSON.stringify(veiculo, null, 2), 'utf-8')
        }

    }

}