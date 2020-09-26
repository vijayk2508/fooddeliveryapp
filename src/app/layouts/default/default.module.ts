import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../../MaterialModule';
import { HomeComponent } from 'src/app/modules/home/home.component';


@NgModule({
  declarations: [DefaultComponent, HomeComponent],
  imports: [CommonModule, RouterModule, SharedModule, MaterialModule],
  providers: [],
})
export class DefaultModule {}
