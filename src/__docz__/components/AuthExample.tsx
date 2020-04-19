import { useAnalyticsApi } from 'react-use-analytics-api';
import * as React from 'react';
import { AuthorizeButton } from '../../components/AuthorizeButton';
import { SignOutButton } from '../../components/SignOutButton';
import clientId from '../client-id-config';

export function AuthExample(): JSX.Element {
  const { gapi, authorized } = useAnalyticsApi();
  return (
    <div>
      {!authorized && (
        <div>
          Not authorized. Sign in here: <AuthorizeButton gapi={gapi} authOptions={{ clientId }} />
        </div>
      )}
      {authorized && (
        <div>
          We&apos;re authorized! <SignOutButton gapi={gapi} />
        </div>
      )}
    </div>
  );
}
