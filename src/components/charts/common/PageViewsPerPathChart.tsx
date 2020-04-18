import { GoogleAnalyticsEmbedAPI, TableChartOptions, Query } from '@devboldly/react-use-google-analytics-embed-api';
import * as React from 'react';
import { TableChart } from '../TableChart';

export interface PageViewsPerPathChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) */
  gapi: GoogleAnalyticsEmbedAPI;
  /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://react-analytics-charts.netlify.com/ViewSelector) for more information. */
  viewId: string;
  /** Optional. Number of days the chart shows data for. Defaults to `28`. */
  days?: number;
  /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) renders. One will be created if no value is provided. */
  container?: string;
  /** Optional. The options for this chart have been preconfigured, but you can add or override any [TableChartOptions](https://react-analytics-charts.netlify.com/TableChart#chart-options) you'd like here, such as the `width` or sorting. */
  options?: TableChartOptions;
  /** Optional. The [query](https://react-analytics-charts.netlify.com/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://react-analytics-charts.netlify.com/DataChart#query-prop) you'd like here. */
  query?: Query;
}

/**
 * See documentation: [PageViewsPerPathChart](https://react-analytics-charts.netlify.com/PageViewsPerPathChart)
 *
 * This [TableChart](https://react-analytics-charts.netlify.com/TableChart) shows the number of pageviews for each page path in the date range specified (number of days ago, until today).
 *
 * This chart is useful for seeing which pages and posts are the most popular.
 *
 * Refer to the [Charts Overview](https://react-analytics-charts.netlify.com/charts) for a list of all charts available.
 */
export function PageViewsPerPathChart(
  props: PageViewsPerPathChartProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const days: number = props.days ? Math.max(1, Math.abs(props.days)) : 28;

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'viewId', 'days', 'container', 'options', 'query'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return (
    <TableChart
      {...divProps}
      gapi={props.gapi}
      query={{
        metrics: 'ga:pageviews',
        dimensions: 'ga:pagePath',
        'start-date': `${days}daysAgo`,
        'end-date': 'today',
        ids: props.viewId,
        ...props.query,
      }}
      container={props.container ? props.container : `gapi-pageviews-per-path-chart-${days}-days`}
      options={{
        sortAscending: false,
        sortColumn: 1,
        ...props.options,
      }}
    />
  );
}
