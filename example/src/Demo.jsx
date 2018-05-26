import React, { Component } from 'react';
import { TranslationProvider } from 'react-simple-context-i18n';
import Updater from './Updater';
import Text from './Text';

export default class Demo extends Component {
  state = {
    lang: 'en',
    translations: {
      en: {
        nav: {
          title: 'nav title en',
          subTitle: 'nav subtitle en',
        },
      },
      de: {
        nav: {
          title: 'nav title de',
          subTitle: 'nav subtitle de',
        },
      },
    },
  };

  updateLanguage = lang => this.setState({ lang });

  render() {
    const { lang, translations } = this.state;
    return (
      <TranslationProvider language={lang} translations={translations}>
        <div>
          <Updater onUpdate={this.updateLanguage} />
          <Text />
        </div>
      </TranslationProvider>
    );
  }
}
