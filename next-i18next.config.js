module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: [
      "bn",
      "de",
      "en",
      "es",
      "fr",
      "he",
      "id",
      "it",
      "ja",
      "ko",
      "pl",
      "pt",
      "ru",
      "ro",      
      "sv",
      "te",
      "vi",
      "zh",
      "ar",
      "tr",
      "ca",
      "fi",
    ],
  },
  trailingSlash: true,
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales',
};
