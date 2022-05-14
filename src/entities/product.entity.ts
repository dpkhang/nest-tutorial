import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
} from 'sequelize-typescript';

@Table
export class Product extends Model {
  @ApiProperty()
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @ApiProperty()
  @Column
  name: string;

  @ApiProperty()
  @Column
  price: number;

  @ApiProperty()
  @AllowNull
  @Column
  description: string;
}
