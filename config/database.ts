import dotenv from 'dotenv';
import { Sequelize } from "sequelize";
dotenv?.config(); 

export const _DBNAME = process.env.dbname!;
export const _HOST = process.env.dbhost!;
export const _PORT = process.env.dbport!;
export const _USER = process.env.dbuser!;
export const _PASS = process.env.dbpass!;


export const db = new Sequelize(
    _DBNAME,
    _USER,
    _PASS.trim(),
    {
        host: _HOST,
        port: 3306,
        dialect: 'mysql'
    }
)