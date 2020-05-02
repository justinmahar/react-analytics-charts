import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { AnalyticsDashboard, AnalyticsDashboardProps } from '../components/AnalyticsDashboard';
import clientId from '../__docz__/client-id-config';

function renderComponent(props: AnalyticsDashboardProps, children: React.ReactNode = undefined): RenderResult {
  return render(<AnalyticsDashboard {...props}>{children}</AnalyticsDashboard>);
}

describe('AnalyticsDashboard', () => {
  test('should render without crashing', async () => {
    const props: AnalyticsDashboardProps = { authOptions: { clientId } };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
