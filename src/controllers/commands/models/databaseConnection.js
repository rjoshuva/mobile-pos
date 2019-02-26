"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const defaultMaximumPoolSize = 5;
exports.DatabaseConnection = new sequelize_1.default(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    omitNull: true,
    freezeTableName: true,
    operatorsAliases: false,
    pool: {
        min: 0,
        acquire: 30000,
        max: defaultMaximumPoolSize
    }
});
exports.startTransaction = () => {
    return exports.DatabaseConnection.transaction();
};
//# sourceMappingURL=databaseConnection.js.map