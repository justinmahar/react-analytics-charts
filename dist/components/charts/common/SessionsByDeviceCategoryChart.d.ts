import { PieChartOptions, GoogleAnalyticsEmbedAPI, Query } from "react-use-analytics-api";
import * as React from "react";
export interface SessionsByDeviceCategoryChartProps {
    /** **Required.** The ready and authorized [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://justinmahar.github.io/react-analytics-charts/ViewSelector) for more information. */
    viewId: string;
    /** Optional. Number of days the chart shows data for. Defaults to `28`. */
    days?: number;
    /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) renders. One will be created if no value is provided. */
    container?: string;
    /** Optional. The options for this chart have been preconfigured, but you can add or override any [PieChartOptions](https://justinmahar.github.io/react-analytics-charts/PieChart#chart-options) you'd like here, such as the `width` or `title`. */
    options?: PieChartOptions;
    /** Optional. The [query](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) you'd like here. */
    query?: Query;
}
/**
 * See documentation: [SessionsByDeviceCategoryChart](https://justinmahar.github.io/react-analytics-charts/SessionsByDeviceCategoryChart)
 *
 * This [PieChart](https://justinmahar.github.io/react-analytics-charts/PieChart) charts the number of sessions for each device category (such as `desktop`, `mobile`), in the date range specified (number of days ago, until today).
 *
 * This chart is useful for seeing, proportionately by device, how your users are consuming your site's content.
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export declare function SessionsByDeviceCategoryChart(props: SessionsByDeviceCategoryChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element;
