import React from 'react';
import PropTypes from 'prop-types';
import TranslationContext from '../context';

const Message = ({ id }) => (
  <TranslationContext.Consumer>
    {({ language, translations, translator }) =>
      translator({ language, translations, id })
    }
  </TranslationContext.Consumer>
);

Message.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Message;
