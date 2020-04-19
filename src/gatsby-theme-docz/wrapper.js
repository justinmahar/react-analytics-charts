import React from 'react';
import { GoogleAnalytics } from '@devboldly/react-devboldly-tools';
import { TRACKING_ID } from './analytics-config';

// See: https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz#wrapping-the-entire-app

export default ({ children }) => <GoogleAnalytics trackingId={TRACKING_ID}>{children}</GoogleAnalytics>;
