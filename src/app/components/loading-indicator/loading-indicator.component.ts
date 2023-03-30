import { Component } from '@angular/core';
import { LoadingIndicatorService } from 'src/app/shared/services/LoadingIndicator.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {
  constructor(private readonly loadingIndicatorService: LoadingIndicatorService) { }

  get loading$() {
    return this.loadingIndicatorService.loading$;
  }
}
