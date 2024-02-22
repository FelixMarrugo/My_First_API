import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {ProductosService} from './servicios/productos/productos.service'
import {CrearProductoDto} from './dtos/productos.dto';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productosService: ProductosService,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo') //Decorador, tipo de solicitud, ademas, especificando el nombre de la ruta. 
  getNew(): String{ //nombre del metodo, Tipo de retorno
    return "Soy un nuevo endpoint"; // Retorno
  }

  @Get('productos')
  getProdcuctos(){
    return this.productosService.getAll();   
  }

  @Post('productos')
  crearProducto(@Body() body: CrearProductoDto){ //el cuerpo debe ser de tipo CrearProductoDto para que haga el proceso de validación
    return this.productosService.crear(body)
  }
}
