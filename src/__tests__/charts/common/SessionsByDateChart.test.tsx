import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import { SessionsByDateChart, SessionsByDateChartProps } from '../../../components/charts/common/SessionsByDateChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

function renderComponent(props: SessionsByDateChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<SessionsByDateChart {...props}>{children}</SessionsByDateChart>);
}

describe('SessionsByDateChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: SessionsByDateChartProps = {
      gapi: result.current.gapi,
      viewId: 'ga:123456789',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
