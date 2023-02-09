import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public dialog: MatDialog) { }

  public showMessage(message : string) {
    const dial = this.dialog.open(DialogComponent, ({
      width: '250px',
      data: { message: message }
    }));
  }

  public showConfirmMessage(message : string) : Observable<boolean> {
    const dial = this.dialog.open(DialogComponent, ({
      width: '250px',
      data: { message: message }
    }));

    dial.afterClosed().subscribe(res => {
      if (res) {
        return of(true);
      }
      else {
        return of(false);
      }
    });

    return dial.afterClosed();
  }
}
