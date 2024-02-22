import { Injectable } from '@nestjs/common';
//Importando faker
import {faker} from '@faker-js/faker';

@Injectable()
export class ProductosService {
    productos = [];

    constructor(){
        this.generarProductos();
    }
    generarProductos(){
        for (let index = 0; index < 100; index++) {
            this.productos.push({
                nombre: faker.commerce.product(),
                precio: faker.commerce.price(),
                imagen: faker.image.url(),
            });
        }
    }

    getAll(){
        return this.productos
    }

    crear(data){
        this.productos.push(data);
        return data;
    }
    
}
