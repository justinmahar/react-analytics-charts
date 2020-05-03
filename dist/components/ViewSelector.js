"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_use_analytics_api_1 = require("react-use-analytics-api");
var React = __importStar(require("react"));
/**
 * See documentation: [ViewSelector](https://devboldly.github.io/react-analytics-charts/ViewSelector)
 *
 * The ViewSelector component allows you to choose your account, property, and view via dropdown menus.
 */
function ViewSelector(props) {
    var onChange = typeof props.onChange === 'function' ? props.onChange : function () { return undefined; };
    var viewSelectorId = (typeof props.idPrefix === 'string' ? props.idPrefix + '-' : '') + "gapi-view-selector-container";
    react_use_analytics_api_1.useViewSelector(props.gapi, viewSelectorId, onChange);
    return React.createElement("div", { id: viewSelectorId, className: "gapi-view-selector-container" });
}
exports.ViewSelector = ViewSelector;
