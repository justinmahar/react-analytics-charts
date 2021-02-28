"use strict";
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
exports.SignOutButton = void 0;
var react_use_analytics_api_1 = require("react-use-analytics-api");
var React = __importStar(require("react"));
/**
 * See documentation: [SignOutButton](https://justinmahar.github.io/react-analytics-charts/SignOutButton)
 *
 * A button that signs the user out of Google Analytics via the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/). Reloads the page after signing out.
 *
 * See [AuthorizeButton](https://justinmahar.github.io/react-analytics-charts/AuthorizeButton) for a full example of the authorization flow.
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
