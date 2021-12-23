import { NgModule } from '@angular/core';
import { SomeLib2Component } from './some-lib2.component';
import {FeatureCModule} from '@my-org/some-lib/src/lib/feature-c'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SomeLib2Component
  ],
  imports: [
    CommonModule,
    FeatureCModule
  ],
  exports: [
    SomeLib2Component
  ]
})
export class SomeLib2Module { }
