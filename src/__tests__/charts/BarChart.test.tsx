import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import { BarChart, BarChartProps } from '../../components/charts/BarChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: BarChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<BarChart {...props}>{children}</BarChart>);
}

describe('BarChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: BarChartProps = {
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
