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
exports.AuthorizeButton = void 0;
var react_use_analytics_api_1 = require("react-use-analytics-api");
var React = __importStar(require("react"));
/**
 * See documentation: [AuthorizeButton](https://justinmahar.github.io/react-analytics-charts/AuthorizeButton)
 *
 * Renders a Google Analytics sign-in button allowing the user to sign in with their Google account.
 *
 * After signing in, the `onSignIn` handler is called. This handler can be used to update the view once signed in. The handler is not called if already signed in.
 *
 * To check if the user is already authorized, you can use the [`useAnalyticsApi`](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi) hook. A full example is available [here](https://justinmahar.github.io/react-analytics-charts/AuthorizeButton#example).
 *
 * The [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) will only render the sign-in button once per page load. A refresh button will be shown when the original button's container is disposed of by React. Clicking that button reloads the current page.
 */
function AuthorizeButton(props) {
    var _a, _b;
    var authDiv = React.useRef(null);
    var embedApiAuthContainerId = (typeof props.idPrefix === 'string' ? props.idPrefix + '-' : '') + "gapi-authorize-container";
    var authOptions = __assign({ container: embedApiAuthContainerId }, props.authOptions);
    var _c = React.useState(false), authorizeCalled = _c[0], setAuthorizeCalled = _c[1];
    var authorize = react_use_analytics_api_1.useAuthorize(props.gapi, authOptions, props.onSignIn);
    React.useEffect(function () {
        var aborted = false;
        if (!aborted && typeof props.gapi !== 'undefined' && !authorizeCalled) {
            authorize();
            setAuthorizeCalled(true);
        }
        return function () {
            aborted = true;
        };
    }, [authorize, authorizeCalled, props.gapi]);
    var hasButton = authDiv.current && ((_b = (_a = authDiv === null || authDiv === void 0 ? void 0 : authDiv.current) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length) > 0;
    var handleRefresh = function () {
        if (typeof window !== 'undefined' && window.location && window.location.reload) {
            window.location.reload(false);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: authDiv, className: "gapi-authorize-container", id: embedApiAuthContainerId }),
        !props.hideRefreshButton && !hasButton && (React.createElement("div", { className: "analytics-refresh-button-container" },
            React.createElement("button", { onClick: handleRefresh },
                typeof props.refreshButtonText === 'string' && props.refreshButtonText,
                typeof props.refreshButtonText !== 'string' && (React.createElement(React.Fragment, null,
                    React.createElement("span", { role: "img", "aria-label": "chart" }, "\uD83D\uDCC8"),
                    ' ',
                    "Refresh To Access Google Analytics")))))));
}
exports.AuthorizeButton = AuthorizeButton;
