import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './_components/demo1/demo1.component';
import { Demo2Component } from './_components/demo2/demo2.component';
import { NbButtonModule, NbIconModule, NbCardModule, NbInputModule, NbDatepicker, NbDatepickerModule, NbToggleModule, NbChatModule } from '@nebular/theme';
import { Demo3Component } from './_components/demo3/demo3.component';
import { Demo4Component } from './_components/demo4/demo4.component';
import { Demo5Component } from './_components/demo5/demo5.component';
import { Demo6Component } from './_components/demo6/demo6.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo7Component } from './_components/demo7/demo7.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Demo8Component } from './_components/demo8/demo8.component';
import { Demo9Component } from './_components/demo9/demo9.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [DemoComponent, Demo1Component, Demo2Component, Demo3Component, Demo4Component, Demo5Component, Demo6Component, Demo7Component, Demo8Component, Demo9Component],
  imports: [
    CommonModule,
    DemoRoutingModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbInputModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NbChatModule
  ]
})
export class DemoModule { 

  /**
   *
   */
  constructor() {
    console.log(42)
    
  }
}
