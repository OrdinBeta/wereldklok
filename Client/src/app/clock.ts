import moment from 'moment-timezone';

export class Clock {
    name: string = 'Home';
    timeZone: string = 'Europe/Brussels';
    locale: string = 'nl-BE';

    constructor(name: string, timeZone: string, locale: string) {
        this.name = name;
        this.timeZone = timeZone;
        this.locale = locale;
    }

    get timeZoneUtc(): string {
        return moment().tz(this.timeZone).format('Z');
    }

}
