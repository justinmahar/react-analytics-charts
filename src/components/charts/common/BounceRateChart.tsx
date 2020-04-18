import { GoogleAnalyticsEmbedAPI, LineChartOptions, Query } from '@devboldly/react-use-google-analytics-embed-api';
import * as React from 'react';
import { LineChart } from '../LineChart';

export interface BounceRateChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) */
  gapi: GoogleAnalyticsEmbedAPI;
  /** **Required.** View ID for the view the chart pertains to. See [ViewSelector](https://react-analytics-charts.netlify.com/ViewSelector) for more information. */
  viewId: string;
  /** Optional. Number of days the chart shows data for. Defaults to `28`. */
  days?: number;
  /** Optional. HTML element ID for the container to which the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) renders. One will be created if no value is provided. */
  container?: string;
  /** Optional. The options for this chart have been preconfigured, but you can add or override any [LineChartOptions](https://react-analytics-charts.netlify.com/LineChart#chart-options) you'd like here, such as the `width` or `title`. */
  options?: LineChartOptions;
  /** Optional. The [query](https://react-analytics-charts.netlify.com/DataChart#query-prop) for this chart has been preconfigured, but you can override any [query properties](https://react-analytics-charts.netlify.com/DataChart#query-prop) you'd like here. */
  query?: Query;
}

/**
 * See documentation: [BounceRateChart](https://react-analytics-charts.netlify.com/BounceRateChart)
 *
 * This [LineChart](https://react-analytics-charts.netlify.com/LineChart) charts the bounce rate percentage for each date, until today.
 *
 * A "bounce" occurs when a visitor arrives at your site and promptly leaves without interacting any further.
 *
 * The bounce rate is the percentage of users who bounce. A lower bounce rate indicates higher initial engagement. ⛹️‍♂️
 *
 * Useful for seeing how well a site grabs people's attention and "hooks" them into staying.
 *
 * Refer to the [Charts Overview](https://react-analytics-charts.netlify.com/charts) for a list of all charts available.
 */
export function BounceRateChart(props: BounceRateChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const days: number = props.days ? Math.max(1, Math.abs(props.days)) : 28;

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'viewId', 'days', 'container', 'options', 'query'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return (
    <LineChart
      {...divProps}
      gapi={props.gapi}
      query={{
        metrics: 'ga:bounceRate',
        dimensions: 'ga:date',
        'start-date': `${days}daysAgo`,
        'end-date': 'today',
        ids: props.viewId,
        ...props.query,
      }}
      container={props.container ? props.container : `gapi-bounce-rate-chart-${days}-days`}
      options={{
        title: `Bounce Rate % (${days} Day${days !== 1 ? 's' : ''})`,
        ...props.options,
      }}
    />
  );
}
