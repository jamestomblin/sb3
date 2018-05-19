import { NgModule } from '@angular/core';
import { DbComponent } from './db.component';
//import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { DbService } from './db.service';

@NgModule({
  imports: [
 //   LocalStorageModule
  ],
  providers:[DbService],
  declarations: [DbComponent],
  exports: [DbComponent]
})
export class DbModule { }
