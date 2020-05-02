import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import { GeoChart, GeoChartProps } from '../../components/charts/GeoChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

function renderComponent(props: GeoChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<GeoChart {...props}>{children}</GeoChart>);
}

describe('GeoChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: GeoChartProps = {
      gapi: result.current.gapi,
      container: 'test-container',
      query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:country',
        'start-date': '28daysAgo',
        'end-date': 'today',
        ids: 'ga:123456789',
      },
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
