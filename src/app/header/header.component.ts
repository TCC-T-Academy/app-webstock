import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input("headerName") headerName: string = ""

  title = 'app-webstock';
  shouldRun: any;  
  isLogin:Boolean = false;
  

  
  constructor(private router: Router){
  
    router.events.subscribe((res) => {
      if(res instanceof NavigationEnd){
        if(this.router.url == "/login"){
          this.isLogin=true;
       } else{
          this.headerName = this.router.url
          console.log(this.router);
          this.isLogin=false;
       }
      }
    })
  }
  
  deslogar(){
      if(localStorage.getItem('token')!= ""){
        localStorage.clear();
      }
   }
}
