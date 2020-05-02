import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import { DataChart, DataChartProps } from '../../components/charts/DataChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

function renderComponent(props: DataChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<DataChart {...props}>{children}</DataChart>);
}

describe('DataChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: DataChartProps = {
      gapi: result.current.gapi,
      query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:browser',
        'start-date': '28daysAgo',
        'end-date': 'today',
        ids: 'ga:123456789',
      },
      chart: {
        container: 'data-chart-container',
        type: 'BAR',
        options: {
          title: 'Sessions By Browser (28 Days)',
        },
      },
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
