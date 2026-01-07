import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ExampleEntity } from './entities/example.entity';
// import { ExampleService } from './example.service';
// import { ExampleController } from './example.controller';

/**
 * Example Module
 * 
 * Este es un módulo de ejemplo para demostrar la estructura.
 * 
 * Pasos para crear un nuevo módulo:
 * 1. Crear la entidad en entities/
 * 2. Crear el servicio para la lógica de negocio
 * 3. Crear el controlador para los endpoints
 * 4. Importar TypeOrmModule.forFeature([TuEntidad])
 * 5. Registrar el módulo en app.module.ts
 */

@Module({
  imports: [
    // TypeOrmModule.forFeature([ExampleEntity])
  ],
  controllers: [
    // ExampleController
  ],
  providers: [
    // ExampleService
  ],
  exports: [
    // ExampleService
  ],
})
export class ExampleModule {}