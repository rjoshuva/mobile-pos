"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = __importDefault(require("bluebird"));
const stringLookup_1 = require("../../lookups/stringLookup");
const DatabaseConnection = __importStar(require("../models/databaseConnection"));
const ProductRepository = __importStar(require("../models/repositories/productRepository"));
exports.execute = (productId) => {
    if ((productId == null) || (productId.trim() === "")) {
        return bluebird_1.default.resolve({ status: 204 });
    }
    let deleteTransaction;
    return DatabaseConnection.startTransaction()
        .then((startedTransaction) => {
        deleteTransaction = startedTransaction;
        return ProductRepository.queryById(productId, deleteTransaction);
    }).then((queriedProduct) => {
        if (queriedProduct == null) {
            return bluebird_1.default.resolve();
        }
        return ProductRepository.destroy(queriedProduct, deleteTransaction);
    }).then(() => {
        deleteTransaction.commit();
        return bluebird_1.default.resolve({ status: 204 });
    }).catch((error) => {
        if (deleteTransaction != null) {
            deleteTransaction.rollback();
        }
        return bluebird_1.default.reject({
            status: (error.status || 500),
            message: (error.message || stringLookup_1.ErrorCodeLookup.EC1003)
        });
    });
};
//# sourceMappingURL=productDeleteCommand.js.map