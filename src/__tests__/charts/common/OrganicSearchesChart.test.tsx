import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import {
  OrganicSearchesChart,
  OrganicSearchesChartProps,
} from '../../../components/charts/common/OrganicSearchesChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: OrganicSearchesChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<OrganicSearchesChart {...props}>{children}</OrganicSearchesChart>);
}

describe('OrganicSearchesChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: OrganicSearchesChartProps = {
      gapi: result.current.gapi,
      viewId: 'ga:123456789',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
