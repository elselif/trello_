import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {
  doneInput: string = '';

  constructor(public dialogRef: MatDialogRef<DialogComponentComponent>) {}

  submitForm() {
    if (this.doneInput) {
      this.dialogRef.close(this.doneInput);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
