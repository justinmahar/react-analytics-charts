import { DoczFooter } from '@devboldly/react-devboldly-tools';
import { MainContainer as OriginalMainContainer } from 'gatsby-theme-docz/src/components/MainContainer/index';
import React from 'react';

export const MainContainer = ({ children, ...rest }) => {
  return (
    <OriginalMainContainer {...rest}>
      {children}
      <DoczFooter />
    </OriginalMainContainer>
  );
};
