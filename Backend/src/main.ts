import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; //Importamos las validaciones

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe); //Activar la verificacion y formación de datos
  await app.listen(3000);
}
bootstrap();
