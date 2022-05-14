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
export class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @ApiProperty()
  @Column
  id: number;

  @ApiProperty()
  @Column
  email: string;

  @ApiProperty()
  @Column
  password: string;

  @ApiProperty()
  @Column
  first_name: string;

  @ApiProperty()
  @Column
  last_name: string;

  @ApiProperty()
  @Column
  age: string;

  @ApiProperty()
  @AllowNull
  @Column
  image: string;

  @ApiProperty()
  @AllowNull
  @Column
  phone: string;
}
