import { GoogleAnalyticsEmbedAPI, LineChartOptions, Query } from 'react-use-analytics-api';
import * as React from 'react';
import { LineChart } from '../LineChart';

export type ActiveUserDays = [1, 7, 14, 28, 30];

export interface ActiveUsersChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) */
  gapi: GoogleAnalyticsEmbedAPI;
  /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://devboldly.github.io/react-analytics-charts/ViewSelector) for more information. */
  viewId: string;
  /** Optional. Number of days the chart shows data for. Defaults to `28`. */
  days?: number;
  /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) renders. One will be created if no value is provided. */
  container?: string;
  /** Optional. Number of users who visited within the last `1`, `7`, `14`, `28`, or `30` days. Defaults to `7`. */
  activeUserDays?: ActiveUserDays;
  /** Optional. The options for this chart have been preconfigured, but you can add or override any [LineChartOptions](https://devboldly.github.io/react-analytics-charts/LineChart#chart-options) you'd like here, such as the `width` or `title`. */
  options?: LineChartOptions;
  /** Optional. The [query](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) you'd like here. */
  query?: Query;
}

/**
 * See documentation: [ActiveUsersChart](https://devboldly.github.io/react-analytics-charts/ActiveUsersChart)
 *
 * This [LineChart](https://devboldly.github.io/react-analytics-charts/LineChart) charts the number of users who visited within the last `1`, `7`, `14`, `28`, or `30` days, for each date, until today.
 *
 * Useful for visualizing your userbase growth over time.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export function ActiveUsersChart(props: ActiveUsersChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const days: number = props.days ? Math.max(1, Math.abs(props.days)) : 28;

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'viewId', 'days', 'container', 'activeUserDays', 'options', 'query'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return (
    <LineChart
      {...divProps}
      gapi={props.gapi}
      query={{
        metrics: `ga:${props.activeUserDays}dayUsers`,
        dimensions: 'ga:date',
        'start-date': `${days}daysAgo`,
        'end-date': 'today',
        ids: props.viewId,
        ...props.query,
      }}
      container={props.container ? props.container : `gapi-${props.activeUserDays}-day-active-users-chart-${days}-days`}
      options={{
        title: `${props.activeUserDays}-Day Active Users (${days} Day${days !== 1 ? 's' : ''})`,
        ...props.options,
      }}
    />
  );
}

ActiveUsersChart.defaultProps = {
  activeUserDays: 7,
};
