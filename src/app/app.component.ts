
import { ChangeDetectorRef, Component, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';
import { EstoqueComponent } from './estoque/estoque.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  @Output("headerName") headerName:string = "";

  title = 'app-webstock';
  
shouldRun: any;
public sidebarShow: boolean = true;


// @ViewChild(MatSidenav)
// sidenav!:MatSidenav;
isLogin:Boolean = false;

constructor(  private observer: BreakpointObserver,
              private router: Router,
              private cd: ChangeDetectorRef){

  router.events.subscribe((res) => {
    if(res instanceof NavigationEnd){
      if(this.router.url == "/login"){
        this.isLogin=true;
     } else{

        this.isLogin=false;
     }
    }
  })
}

// ngAfterViewInit(){
//   this.checkSideNav();
//   this.cd.detectChanges();
// }


  // checkSideNav(){
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res) =>{
  //     if(res.matches){        
  //       this.sidenav.mode = 'over';
  //       this.sidenav.close();
  //     }else{
  //       this.sidenav.mode = 'side';
  //       this.sidenav.open();
  //     }     
  //   });
  // }

  deslogar(){

    if(localStorage.getItem('token')!= ""){

      localStorage.removeItem('token');

    }

 }

 isLoginRoute() {
    return this.router.url === '/login';
  }

onOutletLoaded(component:any){
    if(component instanceof EstoqueComponent){
      component.headerName = "Gestão de Estoque";
    }else if(component instanceof EstoqueComponent){
      component.headerName = "Painel Estoque";
    }else if(component instanceof EstoqueComponent){
      component.headerName = "Painel Estoque";
    }else if(component instanceof EstoqueComponent){
      component.headerName = "Painel Estoque";
    }

  }
}


