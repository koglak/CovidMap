import {countries} from '../data/data';

export function getIsoCodeByName(countryName) {
    const country = countries.find(c => c.name === countryName);
    return country ? country.iso : null;
}