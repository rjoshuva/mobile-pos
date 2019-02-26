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
const Helper = __importStar(require("../helpers/helper"));
const stringLookup_1 = require("../../lookups/stringLookup");
const ProductRepository = __importStar(require("../models/repositories/productRepository"));
const mapProductData = (queriedProduct) => {
    return {
        id: queriedProduct.id,
        count: queriedProduct.count,
        lookupCode: queriedProduct.lookupCode,
        createdOn: Helper.formatDate(queriedProduct.createdOn)
    };
};
exports.queryById = (recordId) => {
    if (!recordId || (recordId.trim() === "")) {
        return bluebird_1.default.reject({
            status: 422,
            message: stringLookup_1.ErrorCodeLookup.EC2025
        });
    }
    return ProductRepository.queryById(recordId)
        .then((existingProduct) => {
        if (!existingProduct) {
            return bluebird_1.default.reject({
                status: 404,
                message: stringLookup_1.ErrorCodeLookup.EC1001
            });
        }
        return bluebird_1.default.resolve({
            status: 200,
            data: mapProductData(existingProduct)
        });
    });
};
exports.queryByLookupCode = (productLookupCode) => {
    if (!productLookupCode || (productLookupCode.trim() === "")) {
        return bluebird_1.default.reject({
            status: 422,
            message: stringLookup_1.ErrorCodeLookup.EC2026
        });
    }
    return ProductRepository.queryByLookupCode(productLookupCode)
        .then((existingProduct) => {
        if (!existingProduct) {
            return bluebird_1.default.reject({
                status: 404,
                message: stringLookup_1.ErrorCodeLookup.EC1001
            });
        }
        return bluebird_1.default.resolve({
            status: 200,
            data: mapProductData(existingProduct)
        });
    });
};
//# sourceMappingURL=productQuery.js.map