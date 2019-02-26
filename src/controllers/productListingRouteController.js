"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsQuery = __importStar(require("./commands/products/productsQuery"));
const stringLookup_1 = require("./lookups/stringLookup");
exports.start = (req, res) => {
    ProductsQuery.query()
        .then((productsCommandResponse) => {
        res.setHeader("Cache-Control", "no-cache, max-age=0, must-revalidate, no-store");
        res.render(stringLookup_1.ViewNameLookup.ProductListing, {
            products: productsCommandResponse.data
        });
    }).catch((error) => {
        res.setHeader("Cache-Control", "no-cache, max-age=0, must-revalidate, no-store");
        res.status((error.status || 500))
            .render(stringLookup_1.ViewNameLookup.ProductListing, {
            products: [],
            errorMessage: (error.message || stringLookup_1.ErrorCodeLookup.EC2001)
        });
    });
};
//# sourceMappingURL=productListingRouteController.js.map