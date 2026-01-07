import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Example Entity
 * 
 * Este es un ejemplo de entidad de TypeORM.
 * 
 * Decoradores comunes:
 * - @Entity() - Define la clase como una entidad
 * - @PrimaryGeneratedColumn() - ID auto-incremental
 * - @Column() - Columna básica
 * - @CreateDateColumn() - Timestamp de creación automático
 * - @UpdateDateColumn() - Timestamp de actualización automático
 * - @ManyToOne() - Relación muchos a uno
 * - @OneToMany() - Relación uno a muchos
 * - @ManyToMany() - Relación muchos a muchos
 * - @OneToOne() - Relación uno a uno
 * 
 * Ejemplo de uso:
 * 
 * @Entity('users')
 * export class User {
 *   @PrimaryGeneratedColumn()
 *   id: number;
 * 
 *   @Column({ unique: true })
 *   email: string;
 * 
 *   @Column()
 *   name: string;
 * 
 *   @Column({ default: true })
 *   isActive: boolean;
 * 
 *   @CreateDateColumn()
 *   createdAt: Date;
 * 
 *   @UpdateDateColumn()
 *   updatedAt: Date;
 * }
 */

@Entity('examples')
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}