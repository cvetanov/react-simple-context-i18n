import React from 'react';
import PropTypes from 'prop-types';
import TranslationContext from '../context';
import safelyRenderString from '../tools/safety';

const Message = ({ id }) => (
  <TranslationContext.Consumer>
    {({ language, translations, translator }) =>
      safelyRenderString(translator({ language, translations, id }))
    }
  </TranslationContext.Consumer>
);

Message.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Message;
