import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Clock } from '../clock';

@Component({
    selector: 'app-clock',
    imports: [],
    templateUrl: './clock.component.html',
    styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit, OnDestroy {

    @Input()
    clock: Clock = new Clock('Home', 'Europe/Brussels', 'nl-BE');

    @Output()
    removed = new EventEmitter<string>();

    time: Date = new Date();
    isNight: boolean = false;
    intervalId: number | undefined;

    ngOnInit() {
        this.intervalId = window.setInterval(() => {
            this.time = new Date();
            const timeIn24hFormat: string = this.time.toLocaleTimeString('nl-BE', {
                timeZone: this.clock.timeZone,
            });
            const hour: number = parseInt(timeIn24hFormat.split(':')[0], 10);
            this.isNight = hour <= 6 || hour >= 18;
        }, 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    changeLocale(locale: string) {
        this.clock.locale = locale;
    }

    remove() {
        this.removed.emit(this.clock.timeZone);
    }

}
