import { GoogleAnalyticsEmbedAPI, TableChartOptions, Query } from 'react-use-analytics-api';
import * as React from 'react';
export interface PageViewsPerPathChartProps {
    /** **Required.** The ready and authorized [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://devboldly.github.io/react-analytics-charts/ViewSelector) for more information. */
    viewId: string;
    /** Optional. Number of days the chart shows data for. Defaults to `28`. */
    days?: number;
    /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) renders. One will be created if no value is provided. */
    container?: string;
    /** Optional. The options for this chart have been preconfigured, but you can add or override any [TableChartOptions](https://devboldly.github.io/react-analytics-charts/TableChart#chart-options) you'd like here, such as the `width` or sorting. */
    options?: TableChartOptions;
    /** Optional. The [query](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) you'd like here. */
    query?: Query;
}
/**
 * See documentation: [PageViewsPerPathChart](https://devboldly.github.io/react-analytics-charts/PageViewsPerPathChart)
 *
 * This [TableChart](https://devboldly.github.io/react-analytics-charts/TableChart) shows the number of pageviews for each page path in the date range specified (number of days ago, until today).
 *
 * This chart is useful for seeing which pages and posts are the most popular.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export declare function PageViewsPerPathChart(props: PageViewsPerPathChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element;
