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

    clocks: Clock[] = [];

    async ngOnInit() {
        const response = await fetch('http://localhost:' + 3010 + '/my-clocks');
        if (response.ok) {
            // const data: Clock[] = await response.json();

            // Lazy lol
            this.clocks = await response.json();

            // Map
            // this.clocks = data.map((clock) => {
            //     return new Clock(clock.name, clock.timeZone, clock.locale);
            // });

            // For of loop
            // for (const e of data) {
            //     this.clocks.push(new Clock(e.name, e.timeZone, e.locale));
            // }
        }
        // console.log(this.clocks);
    }

    addNewClock(clock: Clock) {
        this.clocks.push(clock);
    }

    removeChild(timeZone: string) {
        // this.times = this.times.filter((time) => { return time[0] !== timeZone; });
        this.clocks = this.clocks.filter((clock) => { return clock.timeZone !== timeZone; });
    }


}
