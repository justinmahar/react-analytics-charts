import {
  GeoChartOptions,
  GoogleAnalyticsEmbedAPI,
  Query,
} from "react-use-analytics-api";
import * as React from "react";
import { GeoChart } from "../GeoChart";

export interface SessionsGeoChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) */
  gapi?: GoogleAnalyticsEmbedAPI;
  /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://justinmahar.github.io/react-analytics-charts/ViewSelector) for more information. */
  viewId: string;
  /** Optional. Number of days the chart shows data for. Defaults to `28`. */
  days?: number;
  /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) renders. One will be created if no value is provided. */
  container?: string;
  /** Optional. Set to `true` to show the page view count on the chart. Defaults to `false`. */
  showPageViews?: boolean;
  /** Optional. The options for this chart have been preconfigured, but you can add or override any [GeoChartOptions](https://justinmahar.github.io/react-analytics-charts/GeoChart#chart-options) you'd like here, such as the `width`, `region`, or `resolution`. */
  options?: GeoChartOptions;
  /** Optional. The [query](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) you'd like here. */
  query?: Query;
}

/**
 * See documentation: [SessionsGeoChart](https://justinmahar.github.io/react-analytics-charts/SessionsGeoChart)
 *
 * This [GeoChart](https://justinmahar.github.io/react-analytics-charts/GeoChart) shows on a map of the world the number of sessions, and optionally pageviews, for each country, in the date range specified (number of days ago, until today).
 *
 * Useful for quickly visualizing where in the world your visitors are coming from.
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export function SessionsGeoChart(
  props: SessionsGeoChartProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const days: number = props.days ? Math.max(1, Math.abs(props.days)) : 28;

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = [
    "gapi",
    "viewId",
    "days",
    "container",
    "showPageViews",
    "options",
    "query",
  ];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  const metrics = ["ga:sessions"];
  if (props.showPageViews) {
    metrics.push("ga:pageviews");
  }

  return (
    <GeoChart
      {...divProps}
      gapi={props.gapi}
      query={{
        metrics: metrics.join(","),
        dimensions: "ga:country",
        "start-date": `${days}daysAgo`,
        "end-date": "today",
        ids: props.viewId,
        ...props.query,
      }}
      container={
        props.container
          ? props.container
          : `gapi-sessions-geo-chart-${days}-days`
      }
      options={props.options}
    />
  );
}

SessionsGeoChart.defaultProps = {
  showPageViews: false,
};
