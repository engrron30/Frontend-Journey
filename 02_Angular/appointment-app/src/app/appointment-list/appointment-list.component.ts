import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  /*appointment: Appointment = {
    id: 69,
    title: 'Code More Angular',
    date: new Date('2026-05-05')
  }*/

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointment: Appointment[] = [];

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppoint: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      console.log('Title:', this.newAppointmentTitle);
      console.log('Date:', this.newAppointmentDate);
      this.appointment.push(newAppoint);
    } else {
      alert(this.newAppointmentTitle + " " + this.newAppointmentDate);
    }

    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();
  }
}
