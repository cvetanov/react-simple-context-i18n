import React from 'react';

const [M] = React.version.split('.');
const major = parseInt(M, 10);
const shouldWrapString = major < 16;

const safelyRenderString = string =>
  shouldWrapString ? <span>{string}</span> : string;

export default safelyRenderString;
