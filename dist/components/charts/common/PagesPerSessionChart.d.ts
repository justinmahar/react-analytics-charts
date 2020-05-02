import { ColumnChartOptions, GoogleAnalyticsEmbedAPI, Query } from 'react-use-analytics-api';
import * as React from 'react';
export interface PagesPerSessionChartProps {
    /** **Required.** The ready and authorized [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://devboldly.github.io/react-analytics-charts/ViewSelector) for more information. */
    viewId: string;
    /** Optional. Number of days the chart shows data for. Defaults to `28`. */
    days?: number;
    /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) renders. One will be created if no value is provided. */
    container?: string;
    /** Optional. The options for this chart have been preconfigured, but you can add or override any [ColumnChartOptions](https://devboldly.github.io/react-analytics-charts/ColumnChart#chart-options) you'd like here, such as the `width` or `title`. */
    options?: ColumnChartOptions;
    /** Optional. The [query](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) you'd like here. */
    query?: Query;
}
/**
 * See documentation: [PagesPerSessionChart](https://devboldly.github.io/react-analytics-charts/PagesPerSessionChart)
 *
 * This [ColumnChart](https://devboldly.github.io/react-analytics-charts/ColumnChart) charts the number of pageviews per session for each date, until today.
 *
 * This chart is useful for showing how engaged users are. More pageviews per session generally means your content is compelling users to browse around.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export declare function PagesPerSessionChart(props: PagesPerSessionChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element;
