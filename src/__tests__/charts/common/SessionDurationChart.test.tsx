import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import {
  SessionDurationChart,
  SessionDurationChartProps,
} from '../../../components/charts/common/SessionDurationChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

function renderComponent(props: SessionDurationChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<SessionDurationChart {...props}>{children}</SessionDurationChart>);
}

describe('SessionDurationChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: SessionDurationChartProps = {
      gapi: result.current.gapi,
      viewId: 'ga:123456789',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
