import { Chart, GoogleAnalyticsEmbedAPI, Query, useDataChart } from '@devboldly/react-use-google-analytics-embed-api';
import * as React from 'react';

export interface DataChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) */
  gapi: GoogleAnalyticsEmbedAPI;
  /** **Required.** The [`Query`](https://react-analytics-charts.netlify.com/DataChart#query-prop) for the Analytics data. */
  query: Query;
  /** **Required.** Specifies the [`Chart`](https://react-analytics-charts.netlify.com/DataChart#chart-prop) to be rendered. */
  chart: Chart;
}

/**
 * See documentation: [DataChart](https://react-analytics-charts.netlify.com/DataChart)
 *
 * A DataChart is the base chart component used for all analytics charts.
 *
 * You can use this to create a custom chart by providing your own data query (see [Query Prop](https://react-analytics-charts.netlify.com/DataChart#query-prop)),
 * the container and type of chart (see [Chart Prop](https://react-analytics-charts.netlify.com/DataChart#chart-prop)), and options for the chart depending on the type of chart you've chosen.
 *
 * For convenience you can use the [BarChart](https://react-analytics-charts.netlify.com/BarChart), [ColumnChart](https://react-analytics-charts.netlify.com/ColumnChart), [GeoChart](https://react-analytics-charts.netlify.com/GeoChart), [LineChart](https://react-analytics-charts.netlify.com/LineChart), [PieChart](https://react-analytics-charts.netlify.com/LineChart), and [TableChart](https://react-analytics-charts.netlify.com/TableChart) components, which wrap DataChart and handle configuring the chart prop of a DataChart for you. (Those components also include TypeScript types for each set of options.)
 *
 * Refer to the [Charts Overview](https://react-analytics-charts.netlify.com/charts) for a list of all charts available.
 *
 * This component wraps the [`useDataChart`](https://react-use-analytics-api.netlify.app/useDataChart) hook, which uses the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/) to query the analytics data and render the chart into a container on the page.
 */
export function DataChart(props: DataChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  useDataChart(props.gapi, props.query, props.chart);

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'query', 'chart'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return <div {...divProps} className="gapi-data-chart-container" id={props.chart.container} />;
}
