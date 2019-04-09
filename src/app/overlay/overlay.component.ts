import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent implements OnInit {

  public dropDownOpened: boolean = false;

/**
 * On init Lifecycle event
 */
  public ngOnInit(): void {
  }
}