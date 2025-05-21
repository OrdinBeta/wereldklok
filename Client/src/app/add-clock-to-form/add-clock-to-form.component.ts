import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Clock } from '../clock';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-clock-to-form',
    imports: [FormsModule],
    templateUrl: './add-clock-to-form.component.html',
    styleUrl: './add-clock-to-form.component.css'
})
export class AddClockToFormComponent implements OnInit {
    @Output()
    chosenClock = new EventEmitter<Clock>();

    timeZones: string[] = Intl.supportedValuesOf('timeZone');
    locales: string[] = [
        'en-US',
        'nl-BE',
        'JA'
    ];
    model: Clock = new Clock('Home', 'Europe/Brussels', 'nl-BE');

    ngOnInit(): void {
        this.model.name = 'Home';
        this.model.timeZone = 'Europe/Brussels';
        this.model.locale = 'nl-BE';
    }

    onSubmit() {
        this.chosenClock.emit(new Clock(this.model.name, this.model.timeZone, this.model.locale));
    }
}
