import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/web/informacion/utils/shared.module';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { VentasComponent } from './ventas/ventas.component';
import { GastosComponent } from './gastos/gastos.component';
import { ComprasComponent } from './compras/compras.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    VentasComponent,
    GastosComponent,
    ComprasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent, RegistroComponent],
})
export class PaginasModule {}
