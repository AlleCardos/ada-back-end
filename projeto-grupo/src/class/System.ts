import { question } from 'readline-sync';
import { VehicleService } from '../services/VehicleService';

export abstract class System{

    private static run: boolean = true

    static main(){

        while(this.run){

            console.log(`
                testando
            `);

            let choice = parseInt(question('digite uma numero: '))
            
            switch(choice){
                case 1:
                    const data = {
                        fabricante: question('Fabricante: '),
                        modelo: question('Modelo: '),
                        ano: parseInt(question('Ano: ')),
                        cor: question('Cor: '),
                        tipoCarteira: question('Tipo Carteira: '),
                    }
                    VehicleService.create(data)
                    break;
            }


        }

    }

}