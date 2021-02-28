import { PieChartOptions, GoogleAnalyticsEmbedAPI, Query } from "react-use-analytics-api";
import * as React from "react";
export interface PieChartProps {
    /** **Required.** The ready and authorized [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** **Required.** The [`Query`](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) for the Analytics data. See the Query Prop section of [DataChart](https://justinmahar.github.io/react-analytics-charts/DataChart). */
    query: Query;
    /** **Required.** Provide an ID for the `div` that will contain the chart. */
    container: string;
    /** Optional. When `true`, the pie chart will become a donut chart. Default `false`. */
    donut?: boolean;
    /** Optional. Options for the chart. To determine what to use here, refer to the Configuration Options section for [pie charts](https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options). */
    options?: PieChartOptions;
}
/**
 * See documentation: [PieChart](https://justinmahar.github.io/react-analytics-charts/PieChart)
 *
 * A pie chart shows data as slices of pie. You can also display a pie chart as a donut.
 *
 * You can use this to create a custom chart by providing your own data query (see [DataChart](https://justinmahar.github.io/react-analytics-charts/DataChart) for more info on queries) and,
 * optionally, [pie chart options](https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options) for the chart.
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export declare function PieChart(props: PieChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element;
