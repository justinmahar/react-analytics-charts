import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import {
  SessionsByUserTypeChart,
  SessionsByUserTypeChartProps,
} from '../../../components/charts/common/SessionsByUserTypeChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: SessionsByUserTypeChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<SessionsByUserTypeChart {...props}>{children}</SessionsByUserTypeChart>);
}

describe('SessionsByUserTypeChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: SessionsByUserTypeChartProps = {
      gapi: result.current.gapi,
      viewId: 'ga:123456789',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
