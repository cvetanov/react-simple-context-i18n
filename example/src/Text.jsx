import React from 'react';
import { Message } from 'react-simple-i18n';

const Text = () => (
  <React.Fragment>
    <Message key="1" id="nav.title" />
    <br />
    <Message key="2" id="nav.subTitle" />
  </React.Fragment>
);

export default Text;
