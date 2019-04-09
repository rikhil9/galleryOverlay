import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent} from './overlay.component';
import { DraggableModule } from '../draggable/draggable.module';

/**
 * Countdown module
 */
@NgModule({
  imports: [
    CommonModule,
    DraggableModule
  ],
  declarations: [
    OverlayComponent,
    
  ],
  exports: [
    OverlayComponent
  ]
})
export class OverlayModule {}
