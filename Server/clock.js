export class Clock {

    name = 'Home';
    timeZone = 'Europe/Brussels';
    locale = 'nl-BE';

    constructor(name, timeZone, locale) {
        this.name = name;
        this.timeZone = timeZone;
        this.locale = locale;
    }
}