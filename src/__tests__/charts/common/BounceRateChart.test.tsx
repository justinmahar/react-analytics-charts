import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import { BounceRateChart, BounceRateChartProps } from '../../../components/charts/common/BounceRateChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

function renderComponent(props: BounceRateChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<BounceRateChart {...props}>{children}</BounceRateChart>);
}

describe('BounceRateChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: BounceRateChartProps = {
      gapi: result.current.gapi,
      viewId: 'ga:123456789',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
