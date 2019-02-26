"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productFieldNames_1 = require("../constants/fieldNames/productFieldNames");
const productEntity_1 = require("../entities/productEntity");
exports.queryById = (id, queryTransaction) => {
    return productEntity_1.ProductEntity.findOne({
        transaction: queryTransaction,
        where: { id: id }
    });
};
exports.queryByLookupCode = (lookupCode, queryTransaction) => {
    return productEntity_1.ProductEntity.findOne({
        transaction: queryTransaction,
        where: { lookupCode: lookupCode }
    });
};
exports.queryAll = () => {
    return productEntity_1.ProductEntity.findAll({
        order: [[productFieldNames_1.ProductFieldName.CREATED_ON, "ASC"]]
    });
};
exports.create = (newProduct, createTransaction) => {
    return productEntity_1.ProductEntity.create(newProduct, {
        transaction: createTransaction
    });
};
exports.destroy = (productEntry, destroyTransaction) => {
    return productEntry.destroy({
        transaction: destroyTransaction
    });
};
//# sourceMappingURL=productRepository.js.map