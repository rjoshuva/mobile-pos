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
const DatabaseConnection = __importStar(require("../models/databaseConnection"));
const ProductRepository = __importStar(require("../models/repositories/productRepository"));
const validateSaveRequest = (saveProductRequest) => {
    const validationResponse = { status: 200 };
    if ((saveProductRequest.lookupCode == null) || (saveProductRequest.lookupCode.trim() === "")) {
        validationResponse.status = 422;
        validationResponse.message = stringLookup_1.ErrorCodeLookup.EC2026;
    }
    else if ((saveProductRequest.count == null) || isNaN(saveProductRequest.count)) {
        validationResponse.status = 422;
        validationResponse.message = stringLookup_1.ErrorCodeLookup.EC2027;
    }
    else if (saveProductRequest.count < 0) {
        validationResponse.status = 422;
        validationResponse.message = stringLookup_1.ErrorCodeLookup.EC2028;
    }
    return validationResponse;
};
exports.execute = (saveProductRequest) => {
    const validationResponse = validateSaveRequest(saveProductRequest);
    if (validationResponse.status !== 200) {
        return bluebird_1.default.reject(validationResponse);
    }
    const productToCreate = {
        count: saveProductRequest.count,
        lookupCode: saveProductRequest.lookupCode
    };
    let createTransaction;
    return DatabaseConnection.startTransaction()
        .then((createdTransaction) => {
        createTransaction = createdTransaction;
        return ProductRepository.queryByLookupCode(saveProductRequest.lookupCode, createTransaction);
    }).then((existingProduct) => {
        if (existingProduct != null) {
            return bluebird_1.default.reject({
                status: 409,
                message: stringLookup_1.ErrorCodeLookup.EC2029
            });
        }
        return ProductRepository.create(productToCreate, createTransaction);
    }).then((createdProduct) => {
        createTransaction.commit();
        return bluebird_1.default.resolve({
            status: 201,
            data: {
                id: createdProduct.id,
                count: createdProduct.count,
                lookupCode: createdProduct.lookupCode,
                createdOn: Helper.formatDate(createdProduct.createdOn)
            }
        });
    }).catch((error) => {
        if (createTransaction != null) {
            createTransaction.rollback();
        }
        return bluebird_1.default.reject({
            status: (error.status || 500),
            message: (error.message || stringLookup_1.ErrorCodeLookup.EC1002)
        });
    });
};
//# sourceMappingURL=productCreateCommand.js.map