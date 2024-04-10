import { Injectable } from '@nestjs/common';

@Injectable()
export class MinisteriosService {
    ministerios = [];

    constructor(){
        this.generarMinisterios();
    }
    generarMinisterios(){
        this.ministerios.push(
            {
                id: 1,
                nombre: "Alabanza",
                lider: "Rafale Caicedo",
                n_mienbros: 5
            }, 
            {
                id: 2,
                nombre: "Ancianos",
                lider: "Manuel Espinosa",
                n_mienbros: 5 
            }
        );
    }
    getAll(){
        return this.ministerios
    }

    crearMinisterio(data){
        this.ministerios.push(data);
        return data
    }
}
