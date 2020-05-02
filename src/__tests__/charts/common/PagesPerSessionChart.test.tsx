import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import {
  PagesPerSessionChart,
  PagesPerSessionChartProps,
} from '../../../components/charts/common/PagesPerSessionChart';
import { useAnalyticsApi } from 'react-use-analytics-api';
import { renderHook } from '@testing-library/react-hooks';

function renderComponent(props: PagesPerSessionChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<PagesPerSessionChart {...props}>{children}</PagesPerSessionChart>);
}

describe('PagesPerSessionChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: PagesPerSessionChartProps = {
      gapi: result.current.gapi,
      viewId: 'ga:123456789',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
