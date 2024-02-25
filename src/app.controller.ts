import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {ProductosService} from './servicios/productos/productos.service';
import {UsuariosService} from './servicios/usuarios/usuarios.service';
import {CrearProductoDto} from './dtos/productos.dto'; //Validar los atributos de entrada para la creación de productos
import {AgregarUsuarioDto} from './dtos/usuarios.dto'; //Validar los atributos de entrada para la creación de usuarios

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productosService: ProductosService,
    private readonly usuariosService: UsuariosService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo') //Decorador, tipo de solicitud, ademas, especificando el nombre de la ruta. 
  getNew(): String{ //nombre del metodo, Tipo de retorno
    return "Soy un nuevo endpoint"; // Retorno
  }

  //Rutas relacionadas a los productos
  @Get('productos')
  getProdcuctos(){
    return this.productosService.getAll();   
  }

  @Post('productos')
  crearProducto(@Body() body: CrearProductoDto){ //el cuerpo debe ser de tipo CrearProductoDto para que haga el proceso de validación
    return this.productosService.crear(body)
  }

  //Rutas relacionadas al los usuarios
  @Get('usuarios')
  getUsuarios(){
    return this.usuariosService.getAll();
  }

  @Post('usuarios')
  agregarUsuario(@Body() body:AgregarUsuarioDto){
    return this.usuariosService.crear(body);
  }
}
