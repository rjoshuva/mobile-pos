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
const ProductRepository = __importStar(require("../models/repositories/productRepository"));
exports.query = () => {
    return ProductRepository.queryAll()
        .then((existingProducts) => {
        return bluebird_1.default.resolve({
            status: 200,
            data: existingProducts.map((existingProduct) => {
                return {
                    id: existingProduct.id,
                    count: existingProduct.count,
                    lookupCode: existingProduct.lookupCode,
                    createdOn: Helper.formatDate(existingProduct.createdOn)
                };
            })
        });
    });
};
//# sourceMappingURL=productsQuery.js.map