import { GeoChartOptions, Query, GoogleAnalyticsEmbedAPI } from 'react-use-analytics-api';
import * as React from 'react';
import { DataChart } from './DataChart';

export interface GeoChartProps {
  /** **Required.** The ready and authorized [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) */
  gapi?: GoogleAnalyticsEmbedAPI;
  /** **Required.** The [`Query`](https://devboldly.github.io/react-analytics-charts/DataChart#query-prop) for the Analytics data. See the Query Prop section of [DataChart](https://devboldly.github.io/react-analytics-charts/DataChart). */
  query: Query;
  /** **Required.** Provide an ID for the `div` that will contain the chart. */
  container: string;
  /** Optional. Options for the chart. To determine what to use here, refer to the Configuration Options section for [geo charts](https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options). */
  options?: GeoChartOptions;
}

/**
 * See documentation: [GeoChart](https://devboldly.github.io/react-analytics-charts/GeoChart)
 *
 * A geo chart shows data on a geographical map. You can specify either the entire world or a specific region.
 *
 * You can use this to create a custom chart by providing your own data query (see [DataChart](https://devboldly.github.io/react-analytics-charts/DataChart) for more info on queries) and,
 * optionally, [geo chart options](https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options) for the chart.
 *
 * Refer to the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for a list of all charts available.
 */
export function GeoChart(props: GeoChartProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const divProps: { [propName: string]: any } = { ...props };
  // Remove our own props
  const propKeys = ['gapi', 'query', 'container', 'options'];
  propKeys.forEach((propKey: string) => delete divProps[propKey]);

  let region: string | undefined = props?.options?.region;
  if (
    region &&
    Object.keys(regionAliases).includes(region) &&
    props.options &&
    typeof props.options.region === 'string'
  ) {
    region = regionAliases[props.options.region];
  }

  return (
    <DataChart
      {...divProps}
      gapi={props.gapi}
      query={props.query}
      chart={{
        container: props.container,
        type: 'GEO',
        options: {
          ...props.options,
          region,
        },
      }}
    />
  );
}

export const regionAliases: { [alias: string]: string } = {
  // world: '001',
  africa: '002',
  'northern-africa': '015',
  'sub-saharan-africa': '202',
  'eastern-africa': '014',
  'middle-africa': '017',
  'southern-africa': '018',
  'western-africa': '011',
  americas: '019',
  'latin-america-caribbean': '419',
  caribbean: '029',
  'central-america': '013',
  'south-america': '005',
  'north-america': '003',
  'northern-america': '021',
  asia: '142',
  'central-asia': '143',
  'eastern-asia': '030',
  'south-eastern-asia': '035',
  'southern-asia': '034',
  'western-asia': '145',
  europe: '150',
  'eastern-europe-northern-asia': '151',
  'northern-europe': '154',
  'southern-europe': '039',
  'western-europe': '155',
  oceania: '009',
  'australia-and-new-zealand': '053',
  melanesia: '054',
  micronesia: '057',
  polynesia: '061',
};
