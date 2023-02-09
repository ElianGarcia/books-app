import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  title: string = 'Info';
  message: string = '';

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

  }

  ngOnInit() {
    this.message = this.data.message;
    this.title = this.data.title || this.title;
  }

  closeModal(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

}
