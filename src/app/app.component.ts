
import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'app-webstock';
  
shouldRun: any;
public sidebarShow: boolean = true;

@ViewChild(MatSidenav)
sidenav!:MatSidenav;
isLogin:Boolean = true;

constructor(private observer: BreakpointObserver, private router: Router){
  router.events.subscribe((res) => {
    console.log(res instanceof NavigationEnd);
    if(res instanceof NavigationEnd){
      if(this.router.url == "/login"){
        this.isLogin=true;
     }else{
        this.isLogin=false;
     }
    }
  })
}

ngAfterViewInit(){

    this.observer.observe(['(max-width: 800px)']).subscribe((res) =>{
      if(!this.isLogin){
        if(res.matches){        
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }else{
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      } else {
        this.sidenav.close();
      }

      
    });
}

 isLoginRoute() {
    return this.router.url === '/login';
  }
}


