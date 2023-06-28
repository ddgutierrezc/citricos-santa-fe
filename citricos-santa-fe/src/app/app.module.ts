import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacionAccionExitosaComponent } from './components/modal-envio-correo-exito/modal-confirmacion-accion-exitosa.component';

@NgModule({
  declarations: [AppComponent, ModalConfirmacionAccionExitosaComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
