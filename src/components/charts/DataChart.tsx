import { Chart, GoogleAnalyticsEmbedAPI, Query, useDataChart } from 'react-use-analytics-api';
import * as React from 'react';

export interface DataChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) */
  gapi?: GoogleAnalyticsEmbedAPI;
  /** **Required.** The [`Query`](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop) for the Analytics data. */
  query: Query;
  /** **Required.** Specifies the [`Chart`](https://justinmahar.github.io/react-analytics-charts/DataChart#chart-prop) to be rendered. */
  chart: Chart;
}

/**
 * See documentation: [DataChart](https://justinmahar.github.io/react-analytics-charts/DataChart)
 *
 * A DataChart is the base chart component used for all analytics charts.
 *
 * You can use this to create a custom chart by providing your own data query (see [Query Prop](https://justinmahar.github.io/react-analytics-charts/DataChart#query-prop)),
 * the container and type of chart (see [Chart Prop](https://justinmahar.github.io/react-analytics-charts/DataChart#chart-prop)), and options for the chart depending on the type of chart you've chosen.
 *
 * For convenience you can use the [BarChart](https://justinmahar.github.io/react-analytics-charts/BarChart), [ColumnChart](https://justinmahar.github.io/react-analytics-charts/ColumnChart), [GeoChart](https://justinmahar.github.io/react-analytics-charts/GeoChart), [LineChart](https://justinmahar.github.io/react-analytics-charts/LineChart), [PieChart](https://justinmahar.github.io/react-analytics-charts/LineChart), and [TableChart](https://justinmahar.github.io/react-analytics-charts/TableChart) components, which wrap DataChart and handle configuring the chart prop of a DataChart for you. (Those components also include TypeScript types for each set of options.)
 *
 * Refer to the [Charts Overview](https://justinmahar.github.io/react-analytics-charts/charts) for a list of all charts available.
 *
 * This component wraps the [`useDataChart`](https://justinmahar.github.io/react-use-analytics-api/useDataChart) hook, which uses the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/) to query the analytics data and render the chart into a container on the page.
 */
export function DataChart(props: DataChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  useDataChart(props.gapi, props.query, props.chart);

  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'query', 'chart'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  return <div {...divProps} className="gapi-data-chart-container" id={props.chart.container} />;
}
