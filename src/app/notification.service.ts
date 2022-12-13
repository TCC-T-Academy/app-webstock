import { Injectable, NgZone } from '@angular/core';
import { ErrorWindow } from './erro/erro.component';

@Injectable({
    providedIn: 'root'
})

export class NotificationService {

  constructor(
    public err: ErrorWindow,
    private zone: NgZone
    ) { }

  showSuccess(message: string): void {
    // Had an issue with the snackbar being ran outside of angular's zone.
     this.zone.run(() => {
      this.err.openInfoSnackBar(message);
     });
  }

  showError(message: string): void {
   this.zone.run(() => {
        // The second parameter is the text in the button. 
       // In the third, we send in the css class for the snack bar.
      this.err.openErrorSnackBar(message);
      
     });
  }

  showWarn(message: string): void {
    this.zone.run(() => {
         // The second parameter is the text in the button. 
        // In the third, we send in the css class for the snack bar.
       this.err.openWarningSnackBar(message);
       
      });
   }
}