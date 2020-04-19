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
var LineChart_1 = require("../LineChart");
/**
 * See documentation: [ActiveUsersChart](https://devboldly.github.io/react-analytics-charts/ActiveUsersChart)
 *
 * This [LineChart](https://devboldly.github.io/react-analytics-charts/LineChart) charts the number of users who visited within the last `1`, `7`, `14`, `28`, or `30` days, for each date, until today.
 *
 * Useful for visualizing your userbase growth over time.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
function ActiveUsersChart(props) {
    var days = props.days ? Math.max(1, Math.abs(props.days)) : 28;
    var divProps = __assign({}, props);
    // Remove our own props
    var propKeys = ['gapi', 'viewId', 'days', 'container', 'activeUserDays', 'options', 'query'];
    propKeys.forEach(function (propKey) { return delete divProps[propKey]; });
    return (React.createElement(LineChart_1.LineChart, __assign({}, divProps, { gapi: props.gapi, query: __assign({ metrics: "ga:" + props.activeUserDays + "dayUsers", dimensions: 'ga:date', 'start-date': days + "daysAgo", 'end-date': 'today', ids: props.viewId }, props.query), container: props.container ? props.container : "gapi-" + props.activeUserDays + "-day-active-users-chart-" + days + "-days", options: __assign({ title: props.activeUserDays + "-Day Active Users (" + days + " Day" + (days !== 1 ? 's' : '') + ")" }, props.options) })));
}
exports.ActiveUsersChart = ActiveUsersChart;
ActiveUsersChart.defaultProps = {
    activeUserDays: 7,
};
