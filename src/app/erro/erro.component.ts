import {Component, Inject, Injectable} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { IError } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorWindow {
  constructor(public snackBar:MatSnackBar) {}

  openErrorSnackBar(msg:string) {

    const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 3000; 
    config.direction = 'ltr';
    config.data = msg;

    this.snackBar.open(msg,"x",config);
  }

  openInfoSnackBar(msg:string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['background-green'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 3000; 
    config.direction = 'ltr';
    config.data = msg;
    this.snackBar.open(msg,"x",config);
  }
}

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})

export class ErroComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: IError) {}
}