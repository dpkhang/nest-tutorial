import { Sequelize } from 'sequelize-typescript';
import { User } from '../entities/user.entity';
import { Product } from '../entities/product.entity';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '08062000aB',
        database: 'nest_tutorial',
        models: [User, Product],
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];
