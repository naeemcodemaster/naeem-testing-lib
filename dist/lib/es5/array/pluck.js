"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluck = void 0;
var pluck = function (elements, field) {
    return elements.map(function (e) { return e[field]; });
};
exports.pluck = pluck;
