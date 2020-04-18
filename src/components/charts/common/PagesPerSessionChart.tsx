import { ColumnChartOptions, GoogleAnalyticsEmbedAPI, Query } from '@devboldly/react-use-google-analytics-embed-api';
import * as React from 'react';
import { ColumnChart } from '../ColumnChart';

export interface PagesPerSessionChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) */
  gapi: GoogleAnalyticsEmbedAPI;
  /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://react-analytics-charts.netlify.com/ViewSelector) for more information. */
  viewId: string;
  /** Optional. Number of days the chart shows data for. Defaults to `28`. */
  days?: number;
  /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) renders. One will be created if no value is provided. */
  container?: string;
  /** Optional. The options for this chart have been preconfigured, but you can add or override any [ColumnChartOptions](https://react-analytics-charts.netlify.com/ColumnChart#chart-options) you'd like here, such as the `width` or `title`. */
  options?: ColumnChartOptions;
  /** Optional. The [query](https://react-analytics-charts.netlify.com/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://react-analytics-charts.netlify.com/DataChart#query-prop) you'd like here. */
  query?: Query;
}

/**
 * See documentation: [PagesPerSessionChart](https://react-analytics-charts.netlify.com/PagesPerSessionChart)
 *
 * This [ColumnChart](https://react-analytics-charts.netlify.com/ColumnChart) charts the number of pageviews per session for each date, until today.
 *
 * This chart is useful for showing how engaged users are. More pageviews per session generally means your content is compelling users to browse around.
 *
 * Refer to the [Charts Overview](https://react-analytics-charts.netlify.com/charts) for a list of all charts available.
 */
export function PagesPerSessionChart(
  props: PagesPerSessionChartProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const days: number = props.days ? Math.max(1, Math.abs(props.days)) : 28;

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'viewId', 'days', 'container', 'options', 'query'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return (
    <ColumnChart
      {...divProps}
      gapi={props.gapi}
      query={{
        metrics: 'ga:pageviewsPerSession',
        dimensions: 'ga:date',
        'start-date': `${days}daysAgo`,
        'end-date': 'today',
        ids: props.viewId,
        ...props.query,
      }}
      container={props.container ? props.container : `gapi-pages-per-session-chart-${days}-days`}
      options={{
        title: `Pages Per Session (${days} Day${days !== 1 ? 's' : ''})`,
        ...props.options,
      }}
    />
  );
}
