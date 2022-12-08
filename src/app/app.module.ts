import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthAdmService } from './auth.adm.service';
import { AuthUsuarioService } from './auth.usuario.service';
import { AuthService } from './login/auth.service';
import { NovaPrevisaoComponent } from './nova-previsao/nova-previsao.component';
import { NovaReservaComponent } from './nova-reserva/nova-reserva.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { GestaoUsuariosComponent } from './gestao-usuarios/gestao-usuarios.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { PrevisaoAtualizarComponent } from './previsao-atualizar/previsao-atualizar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthGerenteService } from './auth.gerente.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReservaAtualizarComponent } from './reserva-atualizar/reserva-atualizar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    MovimentacaoComponent,
    ItemComponent,
    ReservaComponent,
    PrevisaoComponent,
    ErroComponent,
    NovaMovimentacaoComponent,
    LogComponent,
    LoginComponent,
    NovaPrevisaoComponent,
    NovaReservaComponent,
    GestaoUsuariosComponent,
    NovoUsuarioComponent,
    PrevisaoAtualizarComponent,
    ReservaAtualizarComponent,
    FooterComponent,
    HeaderComponent,
    EditarUsuarioComponent

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
    MatSortModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    MatGridListModule

  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
    AuthAdmService,
    AuthUsuarioService,
    AuthGerenteService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
