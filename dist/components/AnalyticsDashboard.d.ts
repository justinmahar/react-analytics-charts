/// <reference types="react" />
import { GoogleAnalyticsEmbedAPI } from "react-use-analytics-api";
import { AuthorizeOptions } from "./AuthorizeButton";
export interface AnalyticsDashboardProps {
    /** **Required.** [Authorize options](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth-options) for the button. Be sure to provide a `clientId` or a `serverAuth.access_token`. See [How To Get An OAuth Client ID From Google](https://justinmahar.github.io/react-analytics-charts/google-oauth-client-id) to get a Client ID. Read more about [access tokens](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/).*/
    authOptions: AuthorizeOptions;
    /** Optional. The view ID for the view you're charting. If you provide a `viewId`, you should hide the view selector with the `hideViewSelector` prop (the view selector component does not support selecting a default view). */
    viewId?: string;
    /** Optional. When true, the view selector is hidden. You should provide a `viewId` prop so the dashboard knows what view to render charts for. Default `false`. */
    hideViewSelector?: boolean;
    /** Optional. When true, the sign-in and sign-out buttons will be hidden. Default `false`. */
    hideAuth?: boolean;
    /** Optional. Text shown while API is loading. Defaults to `Loading...` */
    loadingText?: string;
    /** Optional. This is the render prop where you render your charts. Pass `gapi` (loaded Google API) and `viewId` to all your charts. */
    renderCharts?: (gapi: GoogleAnalyticsEmbedAPI, viewId: string) => JSX.Element;
    /** Optional. When `true`, charts appear above the view selector and authorize button. Otherwise, they appear below. Default `false`. */
    chartsAppearFirst?: boolean;
    /** Optional. An ID string prepended to all HTML IDs used for the chart divs. Specify this if you have multiple dashboards on one page. */
    dashId?: string;
    /** Optional. Set to true to disable reloading on sign-out. Default false. */
    noReloadOnSignOut?: boolean;
    /** Optional. Set to true to hide refresh page button shown when authorize button doesn't render. Default false. */
    hideRefreshButton?: boolean;
    /** Optional. Text for the refresh button shown when the authorize button can't be rendered. */
    refreshButtonText?: string;
    /** Optional. The text for the sign-out button. */
    signOutButtonText?: string;
}
/**
 * See documentation: [AnalyticsDashboard](https://justinmahar.github.io/react-analytics-charts/AnalyticsDashboard)
 *
 * This component allows you to drop in an analytics dashboard that automatically handles loading the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/), [sign in](https://justinmahar.github.io/react-analytics-charts/AuthorizeButton) and [sign out](https://justinmahar.github.io/react-analytics-charts/SignOutButton), and [view selection](https://justinmahar.github.io/react-analytics-charts/ViewSelector).
 *
 * All you need to do is provide your [Client ID](https://justinmahar.github.io/react-analytics-charts/google-oauth-client-id) and a render prop that renders all the [charts](https://justinmahar.github.io/react-analytics-charts/charts) you'd like to see.
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 *
 * If you need more flexibility, you can create your own [custom dashboard](https://justinmahar.github.io/react-analytics-charts/custom-dashboards-standalone-charts) if you'd like.
 */
export declare function AnalyticsDashboard(props: AnalyticsDashboardProps): JSX.Element;
export declare namespace AnalyticsDashboard {
    var defaultProps: {
        renderCharts: (gapi: GoogleAnalyticsEmbedAPI, viewId: string) => JSX.Element;
    };
}
