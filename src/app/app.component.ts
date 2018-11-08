import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public fgDateForm: FormGroup;

  public ngOnInit(): void {
    this.setupForm();
  }

  public setupForm(): void {
    this.fgDateForm = new FormGroup({
      fcDate: new FormControl(''),
      fcDate2: new FormControl(''),
    });
    this.fgDateForm.controls.fcDate.setValue('2018-11-03');
    this.fgDateForm.controls.fcDate2.setValue('2018-11-03');
  }
}
