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
exports.DataChart = void 0;
var react_use_analytics_api_1 = require("react-use-analytics-api");
var React = __importStar(require("react"));
/**
 * See documentation: [DataChart](https://justinmahar.github.io/react-analytics-charts/DataChart)
 *
 * A DataChart is the base chart component used for all analytics charts.
 *
 * You can use this to create a custom chart by providing your own data query (see [Query Prop](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop)),
 * the container and type of chart (see [Chart Prop](https://justinmahar.github.io/react-analytics-charts/DataChart#chart-prop)), and options for the chart depending on the type of chart you've chosen.
 *
 * For convenience you can use the [BarChart](https://justinmahar.github.io/react-analytics-charts/BarChart), [ColumnChart](https://justinmahar.github.io/react-analytics-charts/ColumnChart), [GeoChart](https://justinmahar.github.io/react-analytics-charts/GeoChart), [LineChart](https://justinmahar.github.io/react-analytics-charts/LineChart), [PieChart](https://justinmahar.github.io/react-analytics-charts/LineChart), and [TableChart](https://justinmahar.github.io/react-analytics-charts/TableChart) components, which wrap DataChart and handle configuring the chart prop of a DataChart for you. (Those components also include TypeScript types for each set of options.)
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 *
 * This component wraps the [`useDataChart`](https://justinmahar.github.io/react-use-analytics-api/useDataChart) hook, which uses the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) to query the analytics data and render the chart into a container on the page.
 */
function DataChart(props) {
    react_use_analytics_api_1.useDataChart(props.gapi, props.query, props.chart);
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ["gapi", "query", "chart"];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    return (React.createElement("div", __assign({}, divProps, { className: "gapi-data-chart-container", id: props.chart.container })));
}
exports.DataChart = DataChart;
