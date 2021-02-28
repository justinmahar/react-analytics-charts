"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.BounceRateChart = void 0;
var React = __importStar(require("react"));
var LineChart_1 = require("../LineChart");
/**
 * See documentation: [BounceRateChart](https://justinmahar.github.io/react-analytics-charts/BounceRateChart)
 *
 * This [LineChart](https://justinmahar.github.io/react-analytics-charts/LineChart) charts the bounce rate percentage for each date, until today.
 *
 * A "bounce" occurs when a visitor arrives at your site and promptly leaves without interacting any further.
 *
 * The bounce rate is the percentage of users who bounce. A lower bounce rate indicates higher initial engagement. ⛹️‍♂️
 *
 * Useful for seeing how well a site grabs people's attention and "hooks" them into staying.
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
function BounceRateChart(props) {
    var days = props.days ? Math.max(1, Math.abs(props.days)) : 28;
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ["gapi", "viewId", "days", "container", "options", "query"];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    return (React.createElement(LineChart_1.LineChart, __assign({}, divProps, { gapi: props.gapi, query: __assign({ metrics: "ga:bounceRate", dimensions: "ga:date", "start-date": days + "daysAgo", "end-date": "today", ids: props.viewId }, props.query), container: props.container
            ? props.container
            : "gapi-bounce-rate-chart-" + days + "-days", options: __assign({ title: "Bounce Rate % (" + days + " Day" + (days !== 1 ? "s" : "") + ")" }, props.options) })));
}
exports.BounceRateChart = BounceRateChart;
