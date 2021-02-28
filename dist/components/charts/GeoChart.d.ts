import { GeoChartOptions, Query, GoogleAnalyticsEmbedAPI } from 'react-use-analytics-api';
import * as React from 'react';
export interface GeoChartProps {
    /** **Required.** The ready and authorized [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** **Required.** The [`Query`](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) for the Analytics data. See the Query Prop section of [DataChart](https://justinmahar.github.io/react-analytics-charts/DataChart). */
    query: Query;
    /** **Required.** Provide an ID for the `div` that will contain the chart. */
    container: string;
    /** Optional. Options for the chart. To determine what to use here, refer to the Configuration Options section for [geo charts](https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options). */
    options?: GeoChartOptions;
}
/**
 * See documentation: [GeoChart](https://justinmahar.github.io/react-analytics-charts/GeoChart)
 *
 * A geo chart shows data on a geographical map. You can specify either the entire world or a specific region.
 *
 * You can use this to create a custom chart by providing your own data query (see [DataChart](https://justinmahar.github.io/react-analytics-charts/DataChart) for more info on queries) and,
 * optionally, [geo chart options](https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options) for the chart.
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export declare function GeoChart(props: GeoChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element;
export declare const regionAliases: {
    [alias: string]: string;
};
