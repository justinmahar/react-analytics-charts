<h2 align="center">
  <a href="https://github.com/devboldly/react-analytics-charts">React Analytics Charts</a>
</h2>
<h3 align="center">
  React components to easily embed Google Analytics charts on your React site.<br/>Uses the <a href="https://devboldly.github.io/react-use-analytics-api/">Google Analytics Embed API</a>.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-analytics-charts">
    <img src="https://badge.fury.io/js/react-analytics-charts.svg" alt="npm Version"/>
  </a>
  <a href="https://github.com/devboldly/react-analytics-charts/actions">
    <img src="https://github.com/devboldly/react-analytics-charts/workflows/Tests/badge.svg" alt="Tests Status"/>
  </a>
  <a href="https://github.com/devboldly/react-analytics-charts/actions">
    <img src="https://github.com/devboldly/react-analytics-charts/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
</p>

## Documentation

Read the **[official documentation](https://devboldly.github.io/react-analytics-charts/)**.

[![Analytics Dashboard Example](./src/__docz__/images/dash.png "Analytics Dashboard Example")](https://devboldly.github.io/react-analytics-charts/)

**[👁️ Live Demo](https://devboldly.github.io/react-analytics-charts/AnalyticsDashboard#example)**

## Overview

Easily embed Google Analytics charts on your React site using this component library, which leverages the <a href="https://devboldly.github.io/react-use-analytics-api/">Google Analytics Embed API</a>.

Choose from [10+ commonly used drop-in chart components](https://devboldly.github.io/react-analytics-charts/charts#common-charts), or build your own [custom charts](https://devboldly.github.io/react-analytics-charts/charts#custom-charts) and render them as [bar charts](https://devboldly.github.io/react-analytics-charts/BarChart), 
[column charts](https://devboldly.github.io/react-analytics-charts/ColumnChart), [geo charts](https://devboldly.github.io/react-analytics-charts/GeoChart), [line charts](https://devboldly.github.io/react-analytics-charts/LineChart), [pie charts](https://devboldly.github.io/react-analytics-charts/PieChart), and [tables](https://devboldly.github.io/react-analytics-charts/TableChart).

See the [AnalyticsDashboard](https://devboldly.github.io/react-analytics-charts/AnalyticsDashboard) documentation for a **[full live demo](https://devboldly.github.io/react-analytics-charts/AnalyticsDashboard#example)**, or reference any of the available [charts](https://devboldly.github.io/react-analytics-charts/charts) for individual live demo examples.

### Features include:

- **🙌 Simple and quick**
  - Drop Google Analytics [charts](https://devboldly.github.io/react-analytics-charts/charts) onto your React site within minutes.
- **🎁 Pre-made drop-in charts**
  - Choose from [10+ pre-made commonly used charts](https://devboldly.github.io/react-analytics-charts/charts) that you can use right away.
- **⚒️ Easy to build custom charts**
  - Building [your own charts](https://devboldly.github.io/react-analytics-charts/charts) is easy, too!
- **💼 Handles overhead for you**
  - [Dashboard](https://devboldly.github.io/react-analytics-charts/AnalyticsDashboard) handles embed API access, sign-in, sign-out, and view selection for you. Just focus on the [charts](https://devboldly.github.io/react-analytics-charts/charts) you want.
- **✨ Live examples and rich documentation**
  - Quickly refer to docs on queries and charts, all from one place, with plenty of live examples.

## Installation

```
npm i react-analytics-charts
```

## Quick Start

First, you will need an [OAuth Client ID](https://devboldly.github.io/react-analytics-charts/google-oauth-client-id) from Google to access the Analytics API. See [How To Get An OAuth Client ID From Google](https://devboldly.github.io/react-analytics-charts/google-oauth-client-id) to make this as easy and painless as possible.

You can also use an [access token](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/). See the [`auth` Options docs](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth-options) for more information.

### Analytics Dashboard

The [AnalyticsDashboard](https://devboldly.github.io/react-analytics-charts/AnalyticsDashboard) component handles loading the Google Analytics Embed API, sign-in and sign-out, and view selection for you. See the [live demo](https://devboldly.github.io/react-analytics-charts/AnalyticsDashboard#example).

The following example embeds an analytics dashboard with two charts.

Be sure to **change the [`authOptions`](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth-options)** to use your [**clientId**](https://devboldly.github.io/react-analytics-charts/google-oauth-client-id) or [**serverAuth.access_token**](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/).

From there, you can experiment with [other drop-in charts](https://devboldly.github.io/react-analytics-charts/charts#common-charts) or [try creating your own](https://devboldly.github.io/react-analytics-charts/charts#custom-charts).

```jsx
import { AnalyticsDashboard } from 'react-analytics-charts';
// Over ten different commonly used charts are available
import { SessionsByDateChart, SessionsGeoChart } from 'react-analytics-charts';
```

```jsx
<AnalyticsDashboard
  authOptions={{ clientId: "123456789012-abc123def456ghi789jkl012mno345p.apps.googleusercontent.com" }}
  renderCharts={(gapi, viewId) => {
    return (
      <div>
        <SessionsByDateChart
          gapi={gapi}
          viewId={viewId}
          showPageViews
          showUsers
        />
        <SessionsGeoChart 
          gapi={gapi} 
          viewId={viewId} 
          showPageViews 
        />
        ... More charts here ...
      </div>
    );
  }}
/>
```

See the [Charts Overview](https://devboldly.github.io/react-analytics-charts/charts) for more charts, and [AnalyticsDashboard](https://devboldly.github.io/react-analytics-charts/AnalyticsDashboard) for more information on the dashboard itself.

### Standalone Charts

All of the charts in this library can be used standalone.

If you have the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/) (`gapi`) loaded and ready, and you know [which view ID](https://devboldly.github.io/react-analytics-charts/ViewSelector#example) to query, you can pick any of the [available charts](https://devboldly.github.io/react-analytics-charts/charts) and drop them right onto your site as [standalone charts](https://devboldly.github.io/react-analytics-charts/custom-dashboards-standalone-charts#standalone-charts).

For example, if your view ID is `ga:123456789`:

```jsx
import { SessionsByDateChart } from 'react-analytics-charts';
```

```jsx
<SessionsByDateChart gapi={gapi} viewId="ga:123456789" />
```

You must be authorized. You can use the [ViewSelector demo](https://devboldly.github.io/react-analytics-charts/ViewSelector#example) to determine your view ID, and the [useAnalyticsApi](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi) hook to easily load the `gapi` API and authorize. If you use the [AnalyticsDashboard](https://devboldly.github.io/react-analytics-charts/AnalyticsDashboard), this will all be handled for you.

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## ⭐ Found It Helpful? [Star It!](https://github.com/devboldly/react-analytics-charts/stargazers)

More stars means more development love. So if you found this project helpful, [star it](https://github.com/devboldly/react-analytics-charts/stargazers)! [👉⭐](https://github.com/devboldly/react-analytics-charts/stargazers)

## License

This project is covered under the [MIT License](https://en.wikipedia.org/wiki/MIT_License):

```
Copyright © 2020 DevBoldly https://devboldly.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```