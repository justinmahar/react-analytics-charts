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
var AuthorizeButton_1 = require("./AuthorizeButton");
var SessionsByDateChart_1 = require("./charts/common/SessionsByDateChart");
var SignOutButton_1 = require("./SignOutButton");
var ViewSelector_1 = require("./ViewSelector");
/**
 * See documentation: [AnalyticsDashboard](https://devboldly.github.io/react-analytics-charts/AnalyticsDashboard)
 *
 * This component allows you to drop in an analytics dashboard that automatically handles loading the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/), [sign in](https://devboldly.github.io/react-analytics-charts/AuthorizeButton) and [sign out](https://devboldly.github.io/react-analytics-charts/SignOutButton), and [view selection](https://devboldly.github.io/react-analytics-charts/ViewSelector).
 *
 * All you need to do is provide your [Client ID](https://devboldly.github.io/react-analytics-charts/google-oauth-client-id) and a render prop that renders all the [charts](https://devboldly.github.io/react-analytics-charts/charts) you'd like to see.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 *
 * If you need more flexibility, you can create your own [custom dashboard](https://devboldly.github.io/react-analytics-charts/custom-dashboards-standalone-charts) if you'd like.
 */
function AnalyticsDashboard(props) {
    var _a = React.useState(props.viewId), viewId = _a[0], setViewId = _a[1];
    var _b = react_use_analytics_api_1.useAnalyticsApi(), ready = _b.ready, gapi = _b.gapi, authorized = _b.authorized;
    var showViewSelector = !props.hideViewSelector;
    var showAuth = !props.hideAuth;
    var renderedCharts = React.createElement(React.Fragment, null);
    if (ready && gapi && viewId) {
        renderedCharts = props.renderCharts ? props.renderCharts(gapi, viewId) : React.createElement(React.Fragment, null);
    }
    var analyticsAuthWidgetsClassName = 'analytics-auth-widgets';
    return (React.createElement("div", { className: "analytics-dashboard" },
        !ready && (typeof props.loadingText === 'string' ? props.loadingText : 'Loading...'),
        ready && (React.createElement(React.Fragment, null,
            authorized && !!props.chartsAppearFirst && renderedCharts,
            !authorized && showAuth && (React.createElement("div", { className: analyticsAuthWidgetsClassName },
                React.createElement(AuthorizeButton_1.AuthorizeButton, { gapi: gapi, authOptions: props.authOptions, idPrefix: props.dashId, hideRefreshButton: props.hideRefreshButton, refreshButtonText: props.refreshButtonText }))),
            authorized && (React.createElement(React.Fragment, null,
                showViewSelector && (React.createElement(ViewSelector_1.ViewSelector, { gapi: gapi, onChange: function (viewId) { return setViewId(viewId); }, idPrefix: props.dashId })),
                showAuth && (React.createElement("div", { className: analyticsAuthWidgetsClassName },
                    React.createElement(SignOutButton_1.SignOutButton, { gapi: gapi, noReload: props.noReloadOnSignOut, text: props.signOutButtonText }))),
                !props.chartsAppearFirst && renderedCharts))))));
}
exports.AnalyticsDashboard = AnalyticsDashboard;
AnalyticsDashboard.defaultProps = {
    renderCharts: function (gapi, viewId) {
        return React.createElement(SessionsByDateChart_1.SessionsByDateChart, { gapi: gapi, viewId: viewId });
    },
};
