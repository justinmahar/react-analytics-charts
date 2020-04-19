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
/**
 * See documentation: [SignOutButton](https://devboldly.github.io/react-analytics-charts/SignOutButton)
 *
 * A button that signs the user out of Google Analytics via the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/). Reloads the page after signing out.
 *
 * See [AuthorizeButton](https://devboldly.github.io/react-analytics-charts/AuthorizeButton) for a full example of the authorization flow.
 */
function SignOutButton(props) {
    var signOut = react_use_analytics_api_1.useSignOut(props.gapi);
    var signOutHandler = function () {
        if (typeof props.gapi !== 'undefined') {
            signOut();
            if (typeof window !== 'undefined' && !props.noReload) {
                window.location.reload(false);
            }
        }
    };
    return (React.createElement("button", { className: "analytics-sign-out-button", onClick: signOutHandler }, props.text ? props.text : 'Sign Out'));
}
exports.SignOutButton = SignOutButton;
