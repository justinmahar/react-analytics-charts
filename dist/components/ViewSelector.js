"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewSelector = void 0;
var react_use_analytics_api_1 = require("react-use-analytics-api");
var React = __importStar(require("react"));
/**
 * See documentation: [ViewSelector](https://justinmahar.github.io/react-analytics-charts/ViewSelector)
 *
 * The ViewSelector component allows you to choose your account, property, and view via dropdown menus.
 */
function ViewSelector(props) {
    var onChange = typeof props.onChange === "function" ? props.onChange : function () { return undefined; };
    var viewSelectorId = (typeof props.idPrefix === "string" ? props.idPrefix + "-" : "") + "gapi-view-selector-container";
    react_use_analytics_api_1.useViewSelector(props.gapi, viewSelectorId, onChange);
    return React.createElement("div", { id: viewSelectorId, className: "gapi-view-selector-container" });
}
exports.ViewSelector = ViewSelector;
