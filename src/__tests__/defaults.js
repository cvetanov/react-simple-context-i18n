import { TRANSLATOR } from '../defaults';

describe('defaults.js tests', () => {
  it('translate for the default translations', () => {
    // Given
    const translations = {
      en: {
        nav: {
          title: 'Navigation bar title',
        },
      },
      de: {
        nav: {
          title: 'Navigationsleiste Titel',
        },
      },
    };
    const id = 'nav.title';

    // When
    const enTranslation = TRANSLATOR({ language: 'en', translations, id });
    const deTranslation = TRANSLATOR({ language: 'de', translations, id });

    // Then
    expect(enTranslation).toEqual('Navigation bar title');
    expect(deTranslation).toEqual('Navigationsleiste Titel');
  });
});
