import { BarChartOptions, GoogleAnalyticsEmbedAPI, Query } from "react-use-analytics-api";
import * as React from "react";
export interface BarChartProps {
    /** **Required.** The ready and authorized [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** **Required.** The [`Query`](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) for the Analytics data. See the Query Prop section of [DataChart](https://justinmahar.github.io/react-analytics-charts/DataChart). */
    query: Query;
    /** **Required.** Provide an ID for the `div` that will contain the chart. */
    container: string;
    /** Optional. Options for the chart. To determine what to use here, refer to the Configuration Options section for [bar charts](https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options). */
    options?: BarChartOptions;
}
/**
 * See documentation: [BarChart](https://justinmahar.github.io/react-analytics-charts/BarChart)
 *
 * A bar chart shows data as horizontal bars.
 *
 * You can use this to create a custom chart by providing your own data query (see [DataChart](https://justinmahar.github.io/react-analytics-charts/DataChart) for more info on queries) and,
 * optionally, [bar chart options](https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options) for the chart.
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export declare function BarChart(props: BarChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element;
