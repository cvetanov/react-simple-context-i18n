import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TranslationContext from '../context';
import { LANGUAGE, TRANSLATIONS, TRANSLATOR } from '../defaults';

export default class TranslationProvider extends Component {
  static getDerivedStateFromProps = (nextProps, { context }) => {
    const {
      translations: currentTranslations,
      language: currentLanguage,
    } = context;
    const {
      translations: nextTranslations,
      language: nextLanguage,
    } = nextProps;
    if (
      Object.keys(nextTranslations).length ===
        Object.keys(currentTranslations).length &&
      nextLanguage === currentLanguage
    ) {
      return null;
    }

    return {
      context: {
        ...context,
        language: nextLanguage,
        translations: nextTranslations,
      },
    };
  };

  state = {
    context: {
      language: this.props.language,
      translations: this.props.translations,
      translator: this.props.translator,
    },
  };

  render() {
    return (
      <TranslationContext.Provider value={this.state.context}>
        {this.props.children}
      </TranslationContext.Provider>
    );
  }
}

TranslationProvider.propTypes = {
  language: PropTypes.string,
  translations: PropTypes.shape({}),
  translator: PropTypes.func,
  children: PropTypes.node.isRequired,
};

TranslationProvider.defaultProps = {
  language: LANGUAGE,
  translations: TRANSLATIONS,
  translator: TRANSLATOR,
};
