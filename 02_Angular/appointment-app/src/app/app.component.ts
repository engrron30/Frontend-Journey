import { Component } from '@angular/core';
import { Appointment } from './models/appointment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appointment: Appointment = {
    id: 2,
    title: 'Code more!',
    date: new Date('2024-07-01T10:00:00')
  };
}
