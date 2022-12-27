import { DataTypes } from "sequelize"
import { db } from "../../config/database"

export const Provider = db.define("Providers", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name_company: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contact: {
        type: DataTypes.STRING
    },
    cnpj: {
        type: DataTypes.STRING
    }

})

export const ProviderProduct = db.define("ProvidersProducts", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Products',
            key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
    },
    provider_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Providers',
            key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
    }
})