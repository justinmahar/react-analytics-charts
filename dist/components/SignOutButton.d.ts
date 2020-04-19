/// <reference types="react" />
import { GoogleAnalyticsEmbedAPI } from 'react-use-analytics-api';
export interface SignOutButtonProps {
    /** **Required.** The ready [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/). **Analytics must be ready.** You can pass an undefined gapi until it's fully ready. */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** Optional. The text for the sign-out button. */
    text?: string;
    /** Optional. Set to true to disable reloading on sign-out. */
    noReload?: boolean;
}
/**
 * See documentation: [SignOutButton](https://devboldly.github.io/react-analytics-charts/SignOutButton)
 *
 * A button that signs the user out of Google Analytics via the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/). Reloads the page after signing out.
 *
 * See [AuthorizeButton](https://devboldly.github.io/react-analytics-charts/AuthorizeButton) for a full example of the authorization flow.
 */
export declare function SignOutButton(props: SignOutButtonProps): JSX.Element;
