import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import { SessionsGeoChart, SessionsGeoChartProps } from '../../../components/charts/common/SessionsGeoChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

function renderComponent(props: SessionsGeoChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<SessionsGeoChart {...props}>{children}</SessionsGeoChart>);
}

describe('SessionsGeoChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: SessionsGeoChartProps = {
      gapi: result.current.gapi,
      viewId: 'ga:123456789',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
