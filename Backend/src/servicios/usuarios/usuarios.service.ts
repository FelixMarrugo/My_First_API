import { Injectable } from '@nestjs/common';
import {faker} from '@faker-js/faker';
@Injectable()
export class UsuariosService {
    usuarios = [];
    constructor(){
        this.generarUsuarios();
    }
    generarUsuarios(){
        for (let index = 0; index < 50; index++) {
            this.usuarios.push({
                id: faker.string.uuid(),
                nombre: faker.internet.userName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar()
            });
        }
    }

    getAll(){
        return this.usuarios;
    }

    crear(data){
        this.usuarios.push(data);
        return data; 
    }
}
