import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TeacherProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BootstrapMock';
}
