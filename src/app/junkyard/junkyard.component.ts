import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-junkyard',
  standalone: true,
  imports: [],
  templateUrl: './junkyard.component.html',
  styleUrl: './junkyard.component.css',
})
export class JunkyardComponent implements OnInit {
  router = inject(Router);
  ngOnInit(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
