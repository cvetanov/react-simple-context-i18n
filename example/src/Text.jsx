import React from 'react';
import { Message } from 'react-simple-context-i18n';

const Text = () => (
  <div>
    <Message key="1" id="nav.title" />
    <br />
    <Message key="2" id="nav.subTitle" />
  </div>
);

export default Text;
