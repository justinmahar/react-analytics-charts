import React from 'react';
import { AnalyticsDashboard } from '../components/AnalyticsDashboard';
import { ActiveUsersChart } from '../components/charts/common/ActiveUsersChart';
import { BounceRateChart } from '../components/charts/common/BounceRateChart';
import { OrganicSearchesChart } from '../components/charts/common/OrganicSearchesChart';
import { PagesPerSessionChart } from '../components/charts/common/PagesPerSessionChart';
import { PageViewsPerPathChart } from '../components/charts/common/PageViewsPerPathChart';
import { SessionDurationChart } from '../components/charts/common/SessionDurationChart';
import { SessionsByDeviceCategoryChart } from '../components/charts/common/SessionsByDeviceCategoryChart';
import { SessionsByUserTypeChart } from '../components/charts/common/SessionsByUserTypeChart';
import { SessionsByHourChart } from '../components/charts/common/SessionsByHourChart';
import { SessionsBySourceChart } from '../components/charts/common/SessionsBySourceChart';
import { SessionsGeoChart } from '../components/charts/common/SessionsGeoChart';
import { SessionsByDateChart } from '../components/charts/common/SessionsByDateChart';
import { DataChart } from '../components/charts/DataChart';
import { ViewSelector } from '../components/ViewSelector';
import { AuthorizeButton } from '../components/AuthorizeButton';
import { SignOutButton } from '../components/SignOutButton';
import { useAnalyticsApi } from '@devboldly/react-use-google-analytics-embed-api';
import clientId from '../__docz__/client-id-config';

// Learn how to write stories:
// https://storybook.js.org/docs/basics/writing-stories/

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'AnalyticsDashboard',
  component: AnalyticsDashboard,
};

// The named exports define the stories
export const AnalyticsDashboardExampleState = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        const dataChartStyles = {
          display: 'inline-block',
          margin: '15px',
        };
        return (
          <>
            <div>
              <div>
                <SessionsByDateChart gapi={gapi} viewId={viewId} style={dataChartStyles} showPageViews showUsers />
                <SessionsGeoChart gapi={gapi} viewId={viewId} style={dataChartStyles} showPageViews />
              </div>
              <div>
                <BounceRateChart gapi={gapi} viewId={viewId} style={dataChartStyles} />
                <ActiveUsersChart gapi={gapi} viewId={viewId} style={dataChartStyles} />
              </div>
            </div>
            <div>
              <PageViewsPerPathChart gapi={gapi} viewId={viewId} style={dataChartStyles} />
            </div>
          </>
        );
      }}
      // refreshButtonText="Refresheroni"
      // signOutButtonText="Signoutaroni"
      // noReloadOnSignOut
      // hideRefreshButton
    />
  );
};
AnalyticsDashboardExampleState.story = {
  name: 'AnalyticsDashboard With 5 Charts',
};

export const ActiveUsersChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <ActiveUsersChart gapi={gapi} viewId={viewId} activeUserDays={14} />;
      }}
    />
  );
};
ActiveUsersChartStory.story = {
  name: 'ActiveUsersChart',
};
export const BounceRateChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <BounceRateChart gapi={gapi} viewId={viewId} days={30} />;
      }}
    />
  );
};
BounceRateChartStory.story = {
  name: 'BounceRateChart',
};
export const OrganicSearchesChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <OrganicSearchesChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
OrganicSearchesChartStory.story = {
  name: 'OrganicSearchesChart',
};
export const PagesPerSessionChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <PagesPerSessionChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
PagesPerSessionChartStory.story = {
  name: 'PagesPerSessionChart',
};
export const PageViewsPerPathChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <PageViewsPerPathChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
PageViewsPerPathChartStory.story = {
  name: 'PageViewsPerPathChart',
};
export const SessionDurationChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <SessionDurationChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
SessionDurationChartStory.story = {
  name: 'SessionDurationChart',
};
export const SessionsByDeviceCategoryChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <SessionsByDeviceCategoryChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
SessionsByDeviceCategoryChartStory.story = {
  name: 'SessionsByDeviceCategoryChart',
};
export const SessionsByUserTypeChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <SessionsByUserTypeChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
SessionsByUserTypeChartStory.story = {
  name: 'SessionsByUserTypeChart',
};
export const SessionsByHourChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <SessionsByHourChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
SessionsByHourChartStory.story = {
  name: 'SessionsByHourChart',
};
export const SessionsBySourceChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <SessionsBySourceChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
SessionsBySourceChartStory.story = {
  name: 'SessionsBySourceChart',
};
export const SessionsGeoChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <SessionsGeoChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
SessionsGeoChartStory.story = {
  name: 'SessionsGeoChart',
};
export const SessionsByDateChartStory = () => {
  return (
    <AnalyticsDashboard
      authOptions={{ clientId }}
      renderCharts={(gapi, viewId) => {
        return <SessionsByDateChart gapi={gapi} viewId={viewId} />;
      }}
    />
  );
};
SessionsByDateChartStory.story = {
  name: 'SessionsByDateChart',
};

SessionsGeoChartStory.story = {
  name: 'SessionsGeoChart',
};

export const ViewSelectorStory = () => {
  const [viewId, setViewId] = React.useState('');
  const { gapi, authorized } = useAnalyticsApi();

  return (
    <div>
      <div>
        {!authorized && (
          <AuthorizeButton gapi={gapi} authOptions={{ clientId }} refreshButtonText="Refresh The Page!" />
        )}
      </div>
      <p>Authorized? {authorized ? 'Yes!' : 'No :('}</p>
      {authorized && (
        <div>
          <p>
            <SignOutButton gapi={gapi} text="Assume The Role Of Not Being Signed In" />
          </p>
          <div>
            Selected view ID: <input type="text" value={viewId} onChange={() => undefined} />
          </div>
          <br />
          <ViewSelector gapi={gapi} onChange={viewId => setViewId(viewId)} />
        </div>
      )}
    </div>
  );
};
ViewSelectorStory.story = {
  name: 'ViewSelector',
};

export const DataChartStory = () => {
  return (
    <>
      <AnalyticsDashboard
        authOptions={{ clientId }}
        renderCharts={(gapi, viewId) => {
          return (
            <DataChart
              gapi={gapi}
              query={{
                metrics: 'ga:sessions',
                dimensions: 'ga:browser',
                'start-date': '28daysAgo',
                'end-date': 'today',
                ids: viewId,
              }}
              chart={{
                container: 'data-chart-container',
                type: 'BAR',
                options: {
                  title: 'Sessions By Browser (28 Days)',
                },
              }}
            />
          );
        }}
      />
    </>
  );
};
DataChartStory.story = {
  name: 'DataChart',
};

export const MultipleDashboardsStory = () => {
  return (
    <div>
      <AnalyticsDashboard
        authOptions={{ clientId }}
        renderCharts={(gapi, viewId) => {
          return <ActiveUsersChart gapi={gapi} viewId={viewId} activeUserDays={14} />;
        }}
        dashId="dash1"
      />

      <AnalyticsDashboard
        authOptions={{ clientId }}
        renderCharts={(gapi, viewId) => {
          return <SessionsGeoChart gapi={gapi} viewId={viewId} />;
        }}
        dashId="dash2"
      />

      <AnalyticsDashboard
        authOptions={{ clientId }}
        renderCharts={(gapi, viewId) => {
          return <SessionsBySourceChart gapi={gapi} viewId={viewId} />;
        }}
        dashId="dash3"
      />
    </div>
  );
};
MultipleDashboardsStory.story = {
  name: 'Multiple Dashboards',
};
