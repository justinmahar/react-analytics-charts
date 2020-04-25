import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import { ActiveUsersChart, ActiveUsersChartProps } from '../../../components/charts/common/ActiveUsersChart';
import { useAnalyticsApi } from 'react-use-analytics-api';
import { renderHook } from '@testing-library/react-hooks';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: ActiveUsersChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<ActiveUsersChart {...props}>{children}</ActiveUsersChart>);
}

describe('ActiveUsersChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: ActiveUsersChartProps = {
      gapi: result.current.gapi,
      viewId: 'ga:123456789',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
