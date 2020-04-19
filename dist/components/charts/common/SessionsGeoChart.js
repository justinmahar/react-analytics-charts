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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var GeoChart_1 = require("../GeoChart");
/**
 * See documentation: [SessionsGeoChart](https://devboldly.github.io/react-analytics-charts/SessionsGeoChart)
 *
 * This [GeoChart](https://devboldly.github.io/react-analytics-charts/GeoChart) shows on a map of the world the number of sessions, and optionally pageviews, for each country, in the date range specified (number of days ago, until today).
 *
 * Useful for quickly visualizing where in the world your visitors are coming from.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
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
