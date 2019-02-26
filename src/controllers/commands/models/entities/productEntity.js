"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const databaseConnection_1 = require("../databaseConnection");
const databaseTableNames_1 = require("../constants/databaseTableNames");
const productFieldNames_1 = require("../constants/fieldNames/productFieldNames");
const modelName = "Product";
exports.ProductEntity = databaseConnection_1.DatabaseConnection.define(modelName, {
    id: {
        field: productFieldNames_1.ProductFieldName.ID,
        type: sequelize_1.default.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    lookupCode: {
        field: productFieldNames_1.ProductFieldName.LOOKUP_CODE,
        type: sequelize_1.default.STRING,
        allowNull: false,
        defaultValue: ""
    },
    count: {
        field: productFieldNames_1.ProductFieldName.COUNT,
        type: sequelize_1.default.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    createdOn: {
        field: productFieldNames_1.ProductFieldName.CREATED_ON,
        type: sequelize_1.default.DATE,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: databaseTableNames_1.DatabaseTableName.PRODUCT
});
//# sourceMappingURL=productEntity.js.map