import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosService } from './servicios/productos/productos.service';
import { UsuariosService } from './servicios/usuarios/usuarios.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProductosService, UsuariosService],
})
export class AppModule {}
