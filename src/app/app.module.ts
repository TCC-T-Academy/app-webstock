import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { ItemComponent } from './item/item.component';
import { ReservaComponent } from './reserva/reserva.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { ErroComponent } from './erro/erro.component';
import { HomeComponent } from './home/home.component';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NovaMovimentacaoComponent } from './nova-movimentacao/nova-movimentacao.component';
import { LogComponent } from './log/log.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { GlobalErrorHandler } from './global-error-handler';
import { ServerErrorInterceptor } from './server-error-interceptor';
import { PrevisaoTestComponent } from './previsao-test/previsao-test.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    MovimentacaoComponent,
    ItemComponent,
    ReservaComponent,
    PrevisaoComponent,
    ErroComponent,
    HomeComponent,
    NovaMovimentacaoComponent,
    LogComponent,
    PrevisaoTestComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
        
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
