import { ColumnChartOptions, GoogleAnalyticsEmbedAPI, Query } from '@devboldly/react-use-google-analytics-embed-api';
import * as React from 'react';
import { DataChart } from './DataChart';

export interface ColumnChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) */
  gapi: GoogleAnalyticsEmbedAPI;
  /** **Required.** Provide an ID for the `div` that will contain the chart. */
  query: Query;
  /** **Required.** The [`Query`](https://react-analytics-charts.netlify.com/DataChart#query-prop) for the Analytics data. See the Query Prop section of [DataChart](https://react-analytics-charts.netlify.com/DataChart). */
  container: string;
  /** Optional. Options for the chart. To determine what to use here, refer to the Configuration Options section for [column charts](https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options). */
  options?: ColumnChartOptions;
}

/**
 * See documentation: [ColumnChart](https://react-analytics-charts.netlify.com/ColumnChart)
 *
 * A column chart shows data as vertical bars. Similar visual presentation to a [line chart](https://react-analytics-charts.netlify.com/LineChart).
 *
 * You can use this to create a custom chart by providing your own data query (see [DataChart](https://react-analytics-charts.netlify.com/DataChart) for more info on queries) and,
 * optionally, [column chart options](https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options) for the chart.
 *
 * Refer to the [Charts Overview](https://react-analytics-charts.netlify.com/charts) for a list of all charts available.
 */
export function ColumnChart(props: ColumnChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'query', 'container', 'options'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return (
    <DataChart
      {...divProps}
      gapi={props.gapi}
      query={props.query}
      chart={{
        container: props.container,
        type: 'COLUMN',
        options: {
          width: '100%',
          ...props.options,
        },
      }}
    />
  );
}
