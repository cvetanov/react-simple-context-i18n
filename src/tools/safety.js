import React from 'react';

const [M] = React.version.split('.');
const major = parseInt(M, 10);
const shouldWrapString = major < 16;

const Wrapper = ({ children }) => <span>{children}</span>;

const safelyRenderString = string =>
  shouldWrapString ? <Wrapper>{string}</Wrapper> : string;

export default safelyRenderString;
