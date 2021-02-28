import {
  GoogleAnalyticsEmbedAPI,
  LineChartOptions,
  Query,
} from "react-use-analytics-api";
import * as React from "react";
import { LineChart } from "../LineChart";

export interface OrganicSearchesChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) */
  gapi?: GoogleAnalyticsEmbedAPI;
  /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://justinmahar.github.io/react-analytics-charts/ViewSelector) for more information. */
  viewId: string;
  /** Optional. Number of days the chart shows data for. Defaults to `28`. */
  days?: number;
  /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) renders. One will be created if no value is provided. */
  container?: string;
  /** Optional. The options for this chart have been preconfigured, but you can add or override any [LineChartOptions](https://justinmahar.github.io/react-analytics-charts/LineChart#chart-options) you'd like here, such as the `width` or `title`. */
  options?: LineChartOptions;
  /** Optional. The [query](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) you'd like here. */
  query?: Query;
}

/**
 * See documentation: [OrganicSearchesChart](https://justinmahar.github.io/react-analytics-charts/OrganicSearchesChart)
 *
 * This [LineChart](https://justinmahar.github.io/react-analytics-charts/LineChart) charts the number of organic searches for each date, until today.
 *
 * This chart is useful for visualizing how much traffic is coming from organic searches alone.
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export function OrganicSearchesChart(
  props: OrganicSearchesChartProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const days: number = props.days ? Math.max(1, Math.abs(props.days)) : 28;

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ["gapi", "viewId", "days", "container", "options", "query"];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return (
    <LineChart
      {...divProps}
      gapi={props.gapi}
      query={{
        metrics: "ga:organicSearches",
        dimensions: "ga:date",
        "start-date": `${days}daysAgo`,
        "end-date": "today",
        ids: props.viewId,
        ...props.query,
      }}
      container={
        props.container
          ? props.container
          : `gapi-organic-searches-chart-${days}-days`
      }
      options={{
        title: `Organic Searches (${days} Day${days !== 1 ? "s" : ""})`,
        ...props.options,
      }}
    />
  );
}
