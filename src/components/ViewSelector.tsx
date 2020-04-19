import { GoogleAnalyticsEmbedAPI, useViewSelector } from 'react-use-analytics-api';
import * as React from 'react';

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
export function ViewSelector(props: ViewSelectorProps): JSX.Element {
  const onChange = typeof props.onChange === 'function' ? props.onChange : () => undefined;
  const viewSelectorId = `${
    typeof props.idPrefix === 'string' ? props.idPrefix + '-' : ''
  }gapi-view-selector-container`;
  useViewSelector(props.gapi, viewSelectorId, onChange);
  return <div id={viewSelectorId} className="gapi-view-selector-container" />;
}
