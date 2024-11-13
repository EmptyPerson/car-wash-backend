import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User'; // Импорт модели

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  models: [User],
});

export default sequelize; // Экспортируем sequelize как default
