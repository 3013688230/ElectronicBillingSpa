import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.snackBar.open('I am Snack bar.')
  }
  title = 'ElectronicBillingSpa';
}
