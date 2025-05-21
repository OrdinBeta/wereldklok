import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Clock } from './clock';

@Injectable({
    providedIn: 'root'
})
export class ClockService {

    private url = 'http://localhost:3010';

    constructor(private http: HttpClient) { }

    // $ is a convention for observables
    getClocks$(): Observable<Clock[]> {
        return this.http.get<Clock[]>(`${this.url}/my-clocks`);
    }

    // Using async/await
    // Withoud rxjs observable
    async getClocks(): Promise<Clock[]> {
        const clocks: Clock[] = [];
        for (const e of await firstValueFrom(this.getClocks$())) {
            clocks.push(new Clock(e.name, e.timeZone, e.locale));
        }

        return clocks;
    }
}
