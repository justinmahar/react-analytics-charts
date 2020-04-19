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
var DataChart_1 = require("./DataChart");
/**
 * See documentation: [GeoChart](https://devboldly.github.io/react-analytics-charts/GeoChart)
 *
 * A geo chart shows data on a geographical map. You can specify either the entire world or a specific region.
 *
 * You can use this to create a custom chart by providing your own data query (see [DataChart](https://devboldly.github.io/react-analytics-charts/DataChart) for more info on queries) and,
 * optionally, [geo chart options](https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options) for the chart.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
function GeoChart(props) {
    var _a;
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ['gapi', 'query', 'container', 'options'];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    var region = (_a = props === null || props === void 0 ? void 0 : props.options) === null || _a === void 0 ? void 0 : _a.region;
    if (region &&
        Object.keys(exports.regionAliases).includes(region) &&
        props.options &&
        typeof props.options.region === 'string') {
        region = exports.regionAliases[props.options.region];
    }
    return (React.createElement(DataChart_1.DataChart, __assign({}, divProps, { gapi: props.gapi, query: props.query, chart: {
            container: props.container,
            type: 'GEO',
            options: __assign(__assign({}, props.options), { region: region }),
        } })));
}
exports.GeoChart = GeoChart;
exports.regionAliases = {
    // world: '001',
    africa: '002',
    'northern-africa': '015',
    'sub-saharan-africa': '202',
    'eastern-africa': '014',
    'middle-africa': '017',
    'southern-africa': '018',
    'western-africa': '011',
    americas: '019',
    'latin-america-caribbean': '419',
    caribbean: '029',
    'central-america': '013',
    'south-america': '005',
    'north-america': '003',
    'northern-america': '021',
    asia: '142',
    'central-asia': '143',
    'eastern-asia': '030',
    'south-eastern-asia': '035',
    'southern-asia': '034',
    'western-asia': '145',
    europe: '150',
    'eastern-europe-northern-asia': '151',
    'northern-europe': '154',
    'southern-europe': '039',
    'western-europe': '155',
    oceania: '009',
    'australia-and-new-zealand': '053',
    melanesia: '054',
    micronesia: '057',
    polynesia: '061',
};
