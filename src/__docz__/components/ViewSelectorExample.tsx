import { useAnalyticsApi } from 'react-use-analytics-api';
import * as React from 'react';
import { AuthorizeButton } from '../../components/AuthorizeButton';
import { SignOutButton } from '../../components/SignOutButton';
import { ViewSelector } from '../../components/ViewSelector';
import clientId from '../client-id-config';

export function ViewSelectorExample(): JSX.Element {
  const [viewId, setViewId] = React.useState('');
  const { gapi, authorized } = useAnalyticsApi();

  const viewIdStyles = { border: 'solid 2px orange', margin: '10px', padding: '5px' };

  return (
    <div>
      {!authorized && <AuthorizeButton gapi={gapi} authOptions={{ clientId }} />}
      {authorized && (
        <div>
          <h2>
            Selected view ID:
            <code style={viewIdStyles}>{viewId}</code>
          </h2>
          <p>
            <SignOutButton gapi={gapi} />
          </p>
          <ViewSelector gapi={gapi} onChange={viewId => setViewId(viewId)} />
        </div>
      )}
    </div>
  );
}
