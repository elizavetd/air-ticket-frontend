import { find } from 'lodash';

export const UTC0 = '+00:00';

export const getCountryTimezones = (countries, currentCountry) => (
  countries.length > 0 && currentCountry
    ? find(countries, { name: currentCountry }).timezones
      .map((item) => item.replace('UTC', '') || UTC0)
    : []
  );
