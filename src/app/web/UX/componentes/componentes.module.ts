import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderComponent } from './sider/sider.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/web/informacion/utils/shared.module';
import { SeccionesCabeceraComponent } from './secciones-cabecera/secciones-cabecera.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackModule } from './feedback/feedback.module';
import { QuillModule } from 'ngx-quill';
import { SolicitudesRoutingModule } from '../paginas/solicitudes/solicitudes-routing.module';
import { IconoArchivoComponent } from './icono-archivo/icono-archivo.component';

@NgModule({
  declarations: [
    SiderComponent,
    FooterComponent,
    NavbarComponent,
    SeccionesCabeceraComponent,
    IconoArchivoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeedbackModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    SolicitudesRoutingModule
  ],
  exports: [
    SiderComponent,
    FooterComponent,
    NavbarComponent,
    SeccionesCabeceraComponent,
    IconoArchivoComponent
  ],
})
export class ComponentesModule {}
