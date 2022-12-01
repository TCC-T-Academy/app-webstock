import {Component, Inject, Injectable} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { IError } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ErroCustomSnackBar {
  constructor(public dialog:MatDialog, public snackBar:MatSnackBar) {}

  openErrorSnackBar(msg:string) {

    const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 3000; 
    config.direction = 'ltr';
    config.data = msg;

    this.snackBar.openFromComponent(ErroComponent, config);

    // this.snackBar.open(msg,"x",config);

    //this.dialog.open(ErroComponent, config);

  }

    openInfoSnackBar(msg:string) {
    // this.snackBar.openFromComponent(ErroComponent, {
    //   data: {
    //     text: msg,
    //     type:'info'
    //   },
    //   duration: 500,
    //   horizontalPosition: 'end',
    //   verticalPosition: 'top'
    // });

    console.log(msg);
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