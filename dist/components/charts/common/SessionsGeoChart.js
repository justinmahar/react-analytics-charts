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
exports.SessionsGeoChart = void 0;
var React = __importStar(require("react"));
var GeoChart_1 = require("../GeoChart");
/**
 * See documentation: [SessionsGeoChart](https://justinmahar.github.io/react-analytics-charts/SessionsGeoChart)
 *
 * This [GeoChart](https://justinmahar.github.io/react-analytics-charts/GeoChart) shows on a map of the world the number of sessions, and optionally pageviews, for each country, in the date range specified (number of days ago, until today).
 *
 * Useful for quickly visualizing where in the world your visitors are coming from.
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
function SessionsGeoChart(props) {
    var days = props.days ? Math.max(1, Math.abs(props.days)) : 28;
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ['gapi', 'viewId', 'days', 'container', 'showPageViews', 'options', 'query'];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    var metrics = ['ga:sessions'];
    if (props.showPageViews) {
        metrics.push('ga:pageviews');
    }
    return (React.createElement(GeoChart_1.GeoChart, __assign({}, divProps, { gapi: props.gapi, query: __assign({ metrics: metrics.join(','), dimensions: 'ga:country', 'start-date': days + "daysAgo", 'end-date': 'today', ids: props.viewId }, props.query), container: props.container ? props.container : "gapi-sessions-geo-chart-" + days + "-days", options: props.options })));
}
exports.SessionsGeoChart = SessionsGeoChart;
SessionsGeoChart.defaultProps = {
    showPageViews: false,
};
