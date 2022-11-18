import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Style - Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    FlexLayoutModule,
  ]
})
export class CustomMaterialModule { }
