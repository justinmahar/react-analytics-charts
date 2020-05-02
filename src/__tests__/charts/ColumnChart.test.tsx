import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import { ColumnChart, ColumnChartProps } from '../../components/charts/ColumnChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

function renderComponent(props: ColumnChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<ColumnChart {...props}>{children}</ColumnChart>);
}

describe('ColumnChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: ColumnChartProps = {
      gapi: result.current.gapi,
      container: 'test-container',
      query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:date',
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
