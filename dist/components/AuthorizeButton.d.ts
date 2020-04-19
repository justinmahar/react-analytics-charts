/// <reference types="react" />
import { GoogleAnalyticsEmbedAPI } from 'react-use-analytics-api';
export interface AuthorizeButtonProps {
    /** **Required.** The ready [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/). **Analytics must be ready.** You can pass an undefined gapi until it's fully ready. */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** **Required.** [Authorize options](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth-options) for the button. Be sure to provide a `clientId` or a `serverAuth.access_token`. */
    authOptions: AuthorizeOptions;
    /** Optional. The authorize button can only be rendered once per page load, so this component shows a refresh button when the original button is destroyed. When this prop is set to `true`, a refresh button will not be shown. */
    hideRefreshButton?: boolean;
    /** Optional. An ID string prepended to the HTML IDs used for the button. Specify this if you have multiple authorize buttons on one page. */
    idPrefix?: string;
    /** Optional. Handler that's called when signed in. Will not be called if already authorized. */
    onSignIn?: () => void;
    /** Optional. Text for the refresh button shown when the authorize button can't be rendered. */
    refreshButtonText?: string;
}
/**
 * See documentation: [AuthorizeButton](https://devboldly.github.io/react-analytics-charts/AuthorizeButton)
 *
 * Renders a Google Analytics sign-in button allowing the user to sign in with their Google account.
 *
 * After signing in, the `onSignIn` handler is called. This handler can be used to update the view once signed in. The handler is not called if already signed in.
 *
 * To check if the user is already authorized, you can use the [`useAnalyticsApi`](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi) hook. A full example is available [here](https://devboldly.github.io/react-analytics-charts/AuthorizeButton#example).
 *
 * The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) will only render the sign-in button once per page load. A refresh button will be shown when the original button's container is disposed of by React. Clicking that button reloads the current page.
 */
export declare function AuthorizeButton(props: AuthorizeButtonProps): JSX.Element;
export interface AuthorizeOptions {
    /** The client ID of your project in the [developers console](https://console.developers.google.com/project). See [How To Get An OAuth Client ID From Google](https://devboldly.github.io/react-analytics-charts/google-oauth-client-id) to get yours. */
    clientId?: string;
    /** The ID of an HTML element in the DOM that will host the sign-in button. You may also pass a reference to the element itself. */
    container?: string;
    /** The text to display before a logged in user's email address. Defaults to `'You are logged in as: '`. */
    userInfoLabel?: string;
    /** A list of Google API auth scopes that your application is requesting. To see all available scopes, visit the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/). For Google Analytics API auth scopes see the developer guides for [Configuration](https://developers.google.com/analytics/devguides/config) and [Reporting](https://developers.google.com/analytics/devguides/reporting) resources. */
    scopes?: string[];
    /**
     * Indicates whether the `scopes` option replaces the default Embed API scopes or adds to them. Specifying `false` (the default) will add to the default scopes, and specifying `true` will replace them with the ones specified by the `scopes` option.
     *
     * The default scopes value is: `['https://www.googleapis.com/auth/analytics.readonly']`.
     *
     * Note: authenticating via the Embed API requires access to the user's basic profile. Those scopes cannot be overwritten.
     */
    overwriteDefaultScopes?: boolean;
    /**
     * If you already have a valid access token, you can pass it to the authorize method directly and the user will not be prompted to authorize. For details on how to retrieve an access token, see the [OAuth 2.0 documentation](https://developers.google.com/identity/protocols/oauth2).
     */
    serverAuth?: {
        access_token: string;
    };
}
