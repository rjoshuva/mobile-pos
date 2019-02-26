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
const ProductDetailRouteController = __importStar(require("../controllers/productDetailRouteController"));
function productDetailRoutes(server) {
    server.get(stringLookup_1.RouteLookup.ProductDetail, ProductDetailRouteController.start);
    server.get((stringLookup_1.RouteLookup.ProductDetail + stringLookup_1.RouteLookup.ProductIdParameter), ProductDetailRouteController.start);
    server.put((stringLookup_1.RouteLookup.API + stringLookup_1.RouteLookup.ProductDetail + stringLookup_1.RouteLookup.ProductIdParameter), ProductDetailRouteController.updateProduct);
    server.post((stringLookup_1.RouteLookup.API + stringLookup_1.RouteLookup.ProductDetail), ProductDetailRouteController.createProduct);
    server.delete((stringLookup_1.RouteLookup.API + stringLookup_1.RouteLookup.ProductDetail + stringLookup_1.RouteLookup.ProductIdParameter), ProductDetailRouteController.deleteProduct);
}
module.exports.routes = productDetailRoutes;
//# sourceMappingURL=productDetailRoutes.js.map