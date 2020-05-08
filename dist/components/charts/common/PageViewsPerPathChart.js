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
var TableChart_1 = require("../TableChart");
/**
 * See documentation: [PageViewsPerPathChart](https://devboldly.github.io/react-analytics-charts/PageViewsPerPathChart)
 *
 * This [TableChart](https://devboldly.github.io/react-analytics-charts/TableChart) shows the number of pageviews for each page path in the date range specified (number of days ago, until today).
 *
 * This chart is useful for seeing which pages and posts are the most popular.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
function PageViewsPerPathChart(props) {
    var days = props.days ? Math.max(1, Math.abs(props.days)) : 28;
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ['gapi', 'viewId', 'days', 'container', 'options', 'query'];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    return (React.createElement(TableChart_1.TableChart, __assign({}, divProps, { gapi: props.gapi, query: __assign({ metrics: 'ga:pageviews', dimensions: 'ga:pagePath', 'start-date': days + "daysAgo", 'end-date': 'today', ids: props.viewId }, props.query), container: props.container ? props.container : "gapi-pageviews-per-path-chart-" + days + "-days", options: __assign({ sortAscending: false, sortColumn: 1, pageSize: 10 }, props.options) })));
}
exports.PageViewsPerPathChart = PageViewsPerPathChart;
