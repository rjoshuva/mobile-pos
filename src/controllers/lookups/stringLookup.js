"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParameterLookup;
(function (ParameterLookup) {
    ParameterLookup["ProductId"] = "productId";
})(ParameterLookup = exports.ParameterLookup || (exports.ParameterLookup = {}));
var ViewNameLookup;
(function (ViewNameLookup) {
    ViewNameLookup["ProductDetail"] = "productDetail";
    ViewNameLookup["ProductListing"] = "productListing";
})(ViewNameLookup = exports.ViewNameLookup || (exports.ViewNameLookup = {}));
var RouteLookup;
(function (RouteLookup) {
    RouteLookup["ProductListing"] = "/";
    RouteLookup["ProductDetail"] = "/productDetail";
    RouteLookup["ProductIdParameter"] = "/:productId";
    RouteLookup["API"] = "/api";
})(RouteLookup = exports.RouteLookup || (exports.RouteLookup = {}));
var ErrorCodeLookup;
(function (ErrorCodeLookup) {
    ErrorCodeLookup["EC1001"] = "Product was not found.";
    ErrorCodeLookup["EC1002"] = "Unable to save product.";
    ErrorCodeLookup["EC1003"] = "Unable to delete product.";
    ErrorCodeLookup["EC2001"] = "Unable to retrieve product listing.";
    ErrorCodeLookup["EC2025"] = "The provided product record ID is not valid.";
    ErrorCodeLookup["EC2026"] = "Please provide a valid product lookup code.";
    ErrorCodeLookup["EC2027"] = "Please provide a valid product count.";
    ErrorCodeLookup["EC2028"] = "Product count may not be negative.";
    ErrorCodeLookup["EC2029"] = "Conflict on parameter: lookupcode.";
})(ErrorCodeLookup = exports.ErrorCodeLookup || (exports.ErrorCodeLookup = {}));
//# sourceMappingURL=stringLookup.js.map