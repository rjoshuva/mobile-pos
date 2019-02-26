"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductQuery = __importStar(require("./commands/products/productQuery"));
const ProductCreateCommand = __importStar(require("./commands/products/productCreateCommand"));
const ProductDeleteCommand = __importStar(require("./commands/products/productDeleteCommand"));
const ProductUpdateCommand = __importStar(require("./commands/products/productUpdateCommand"));
const stringLookup_1 = require("./lookups/stringLookup");
exports.start = (req, res) => {
    ProductQuery.queryById(req.params[stringLookup_1.ParameterLookup.ProductId])
        .then((productCommandResponse) => {
        res.render(stringLookup_1.ViewNameLookup.ProductDetail, {
            product: productCommandResponse.data
        });
    }).catch((error) => {
        let errorMessage = "";
        if (error.status && (error.status >= 500)) {
            errorMessage = error.message;
        }
        res.status((error.status || 500))
            .render(stringLookup_1.ViewNameLookup.ProductDetail, {
            product: {
                id: "",
                count: 0,
                lookupCode: ""
            },
            errorMessage: errorMessage
        });
    });
};
const saveProduct = (productSaveRequest, performSave, res) => {
    performSave(productSaveRequest)
        .then((saveProductCommandResponse) => {
        res.status(saveProductCommandResponse.status)
            .send({
            product: saveProductCommandResponse.data
        });
    }).catch((error) => {
        res.status((error.status || 500))
            .send({
            errorMessage: (error.message || stringLookup_1.ErrorCodeLookup.EC1002)
        });
    });
};
exports.updateProduct = (req, res) => {
    saveProduct(req.body, ProductUpdateCommand.execute, res);
};
exports.createProduct = (req, res) => {
    saveProduct(req.body, ProductCreateCommand.execute, res);
};
exports.deleteProduct = (req, res) => {
    ProductDeleteCommand.execute(req.params[stringLookup_1.ParameterLookup.ProductId])
        .then((deleteProductCommandResponse) => {
        res.status(deleteProductCommandResponse.status)
            .send({});
    }).catch((error) => {
        res.status((error.status || 500))
            .send({
            errorMessage: (error.message || stringLookup_1.ErrorCodeLookup.EC1002)
        });
    });
};
//# sourceMappingURL=productDetailRouteController.js.map