import { render, RenderResult, wait } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useAnalyticsApi } from 'react-use-analytics-api';
import { SignOutButton, SignOutButtonProps } from '../components/SignOutButton';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: SignOutButtonProps, children: React.ReactNode = undefined): RenderResult {
  return render(<SignOutButton {...props}>{children}</SignOutButton>);
}

describe('SignOutButton', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: SignOutButtonProps = { gapi: result.current.gapi };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
