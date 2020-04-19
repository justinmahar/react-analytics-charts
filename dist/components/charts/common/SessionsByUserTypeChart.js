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
var PieChart_1 = require("../PieChart");
/**
 * See documentation: [SessionsByUserTypeChart](https://devboldly.github.io/react-analytics-charts/SessionsByUserTypeChart)
 *
 * This [PieChart](https://devboldly.github.io/react-analytics-charts/PieChart) charts the number of sessions for each user type (new visitors vs. returning visitors), in the date range specified (number of days ago, until today).
 *
 * This chart is useful for seeing what proportion of your visitors are new or returning.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
function SessionsByUserTypeChart(props) {
    var days = props.days ? Math.max(1, Math.abs(props.days)) : 28;
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ['gapi', 'viewId', 'days', 'container', 'options', 'query'];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    return (React.createElement(PieChart_1.PieChart, __assign({}, divProps, { gapi: props.gapi, query: __assign({ metrics: 'ga:sessions', dimensions: 'ga:userType', 'start-date': days + "daysAgo", 'end-date': 'today', ids: props.viewId }, props.query), container: props.container ? props.container : "gapi-sessions-by-user-type-chart-" + days + "-days", donut: true, options: __assign({ title: "Sessions By User Type (" + days + " Day" + (days !== 1 ? 's' : '') + ")" }, props.options) })));
}
exports.SessionsByUserTypeChart = SessionsByUserTypeChart;
