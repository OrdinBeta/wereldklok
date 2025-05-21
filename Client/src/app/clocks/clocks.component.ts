import { Component, OnInit } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { FormsModule } from '@angular/forms';
import { AddClockToFormComponent } from "../add-clock-to-form/add-clock-to-form.component";
import { Clock } from '../clock';

@Component({
    selector: 'app-clocks',
    imports: [ClockComponent, FormsModule, AddClockToFormComponent],
    templateUrl: './clocks.component.html',
    styleUrl: './clocks.component.css'
})
export class ClocksComponent
    implements
    OnInit {
    title = 'wereldklok';

    // times: Array<[timeZone: string, locale: string]> = [
    //     // ["Europe/Brussels", 'nl-BE'],
    //     // ["America/New_York", 'en-US'],
    //     // ["Japan", 'JA']
    // ];

    // // Default values for the new time zone and locale
    // newTimeZone: string = 'Europe/Brussels';
    // newLocale: string = 'nl-BE';

    clocks: Clock[] = [];

    async ngOnInit() {
        const response = await fetch('http://localhost:' + 3000 + '/my-clocks');
        if (response.ok) {
            const data: Clock[] = await response.json();
            this.clocks = data;
        }
    }

    // addNewTime() {
    //     this.times.push([this.newTimeZone, this.newLocale]);
    // }

    addNewClock(clock: Clock) {
        this.clocks.push(clock);
    }

    removeChild(timeZone: string) {
        // this.times = this.times.filter((time) => { return time[0] !== timeZone; });
        this.clocks = this.clocks.filter((clock) => { return clock.timeZone !== timeZone; });
    }


}
