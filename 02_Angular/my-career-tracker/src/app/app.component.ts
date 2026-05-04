import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message = 'Choose a section';

  showDashboard() {
    this.message = 'Welcome to Dashboard';
  }

  showSkills() {
    this.message = 'Your Skills: Angular, HTML, CSS';
  }

  showGoals() {
    this.message = 'Your Goals: Become Frontend Developer';
  }
}
