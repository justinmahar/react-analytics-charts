import { render, RenderResult, wait } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useAnalyticsApi } from 'react-use-analytics-api';
import { AuthorizeButton, AuthorizeButtonProps } from '../components/AuthorizeButton';
import clientId from '../__docz__/client-id-config';

function renderComponent(props: AuthorizeButtonProps, children: React.ReactNode = undefined): RenderResult {
  return render(<AuthorizeButton {...props}>{children}</AuthorizeButton>);
}

describe('AuthorizeButton', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: AuthorizeButtonProps = { gapi: result.current.gapi, authOptions: { clientId } };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
