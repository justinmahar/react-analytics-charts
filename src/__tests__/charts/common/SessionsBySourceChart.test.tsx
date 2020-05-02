import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import {
  SessionsBySourceChart,
  SessionsBySourceChartProps,
} from '../../../components/charts/common/SessionsBySourceChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

function renderComponent(props: SessionsBySourceChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<SessionsBySourceChart {...props}>{children}</SessionsBySourceChart>);
}

describe('SessionsBySourceChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: SessionsBySourceChartProps = {
      gapi: result.current.gapi,
      viewId: 'ga:123456789',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
