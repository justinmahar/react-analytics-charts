/// <reference types="react" />
import { GoogleAnalyticsEmbedAPI } from 'react-use-analytics-api';
export interface ViewSelectorProps {
    /** **Required.** The ready [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/). **Analytics must be ready.** You can pass an undefined gapi until it's fully ready. */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** Optional. Handler that's called when the view selector is changed. Called with a single string arg, `viewId`, that is the view ID that was selected. */
    onChange?: (viewId: string) => void;
    /** Optional. An ID string prepended to the HTML IDs used for the selector. Specify this if you have multiple view selectors on one page. */
    idPrefix?: string;
}
/**
 * See documentation: https://devboldly.github.io/react-analytics-charts/ViewSelector
 *
 * The ViewSelector component allows you to choose your account, property, and view via dropdown menus.
 */
export declare function ViewSelector(props: ViewSelectorProps): JSX.Element;
