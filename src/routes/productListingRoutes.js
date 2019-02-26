"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringLookup_1 = require("../controllers/lookups/stringLookup");
const ProductListingRouteController = __importStar(require("../controllers/productListingRouteController"));
function productListingRoutes(server) {
    server.get(stringLookup_1.RouteLookup.ProductListing, ProductListingRouteController.start);
}
module.exports.routes = productListingRoutes;
//# sourceMappingURL=productListingRoutes.js.map