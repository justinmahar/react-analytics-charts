import { useAnalyticsApi } from 'react-use-analytics-api';
import * as React from 'react';
import { AuthorizeButton } from '../../components/AuthorizeButton';
import { SessionsByDateChart } from '../../components/charts/common/SessionsByDateChart';
import { SessionsBySourceChart } from '../../components/charts/common/SessionsBySourceChart';
import { SignOutButton } from '../../components/SignOutButton';
import { ViewSelector } from '../../components/ViewSelector';

export function CustomDashboardExample(props): JSX.Element {
  const [viewId, setViewId] = React.useState<string | undefined>();
  const { ready, gapi, authorized } = useAnalyticsApi();
  return (
    <div>
      {!ready && 'Please wait...'}
      {ready && (
        <div>
          {!authorized && <AuthorizeButton gapi={gapi} authOptions={props.authOptions} />}
          {authorized && (
            <div>
              <ViewSelector gapi={gapi} onChange={viewId => setViewId(viewId)} />
              <div>
                <SessionsByDateChart gapi={gapi} viewId={viewId} />
                <SessionsBySourceChart gapi={gapi} viewId={viewId} />
              </div>
              <div>
                <SignOutButton gapi={gapi} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
