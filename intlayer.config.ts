/**
* Intlayer configuration file documentation 
* @see https://intlayer.org/doc/concept/configuration
*/

import { type IntlayerConfig, Locales } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH,
      Locales.FRENCH,
      Locales.SPANISH,
    ],
    /**
     * Default locale used as a fallback if the requested locale is not found.
     */
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;
